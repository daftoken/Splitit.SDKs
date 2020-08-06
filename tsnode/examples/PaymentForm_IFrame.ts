
import * as splititApi from 'splitit-sdk-nodejs'
import { VerifyPaymentResponse } from 'splitit-sdk-nodejs'

splititApi.Configuration.sandbox.addApiKey(Credentials.apiKey)

/// <summary>
/// Scenario where the checkout form will be opened in an iframe
/// </summary>
class PaymentIFrame {
  planApi: splititApi.InstallmentPlanApi
  readonly MERCHANT_AMOUNT = 500

  // Authenticate with the api
  async login(userName: string, password: string) {
    const loginApi = new splititApi.LoginApi(splititApi.Configuration.sandbox)

    const { body } = await loginApi.loginPost({ userName, password })

    this.planApi = new splititApi.InstallmentPlanApi(splititApi.Configuration.sandbox, body.sessionId)
  }

  // Initiates the plan
  async initiateInstallmentPlan() {
      const initRequest: splititApi.InitiateInstallmentPlanRequest = {
        // @ts-ignore
        planData: {
          amount: { value: this.MERCHANT_AMOUNT, currencyCode: "USD" },
          numberOfInstallments: 3,
        },
        paymentWizardData: {
          isOpenedInIframe: true,
        },
        // After user successfully interacts with splitit.com they would be
        // redirected to provided Succeeded URL with InstallmentPlanNumber as
        // a parameter in GET request. It is required to continue the flow.
        redirectUrls: {
          succeeded: 'https://example.com/success',
          canceled: 'https://example.com/canceled',
          failed: 'https://example.com/failed',
        },
        billingAddress: {
          addressLine: "260 Madison Avenue.",
          addressLine2: "Appartment 1",
          city: "New York",
          state: "NY",
          country: "USA",
          zip: "10016",
        }, // TODO: set actual billing address data to pre-fill the from (optional)
        consumerData: {
          fullName: "John Smith",
          email: "JohnS@splitit.com",
          phoneNumber: "1-844-775-4848",
          cultureName: "en-us",
          isLocked: false,
          isDataRestricted: false,
        },  // TODO: set actual consumer data to pre-fill the from (optional)
      }
  
      // initResponse contains urls to which you should redirect your customers (eg. checkoutUrl, termsConditionsUrl, privacyPolicyUrl, learnMoreUrl)
      const { body: initResponse } = await this.planApi.installmentPlanInitiate(initRequest)
      // Use the T&C, PrivacyPolicy and the LearnMore urls
      // Save the Installment plan number for future use during the creation of a new plan
  
      if (initResponse.responseHeader.succeeded) {
        // TODO: take the initResponse.CheckoutUrl and redirect your shopper to it
      } else {
        // TODO: show the return error from initResponse.ResponseHeader.Errors
      }
  
  }

  async verifyPayment(installmentPlanNumber: string) {
    // Checks for potential fraud attempts
    //This function MUST be called after payment is processed on Splitit's end, before merchant closes the order on his end
    const { body: verifyResponse } = await this.planApi.installmentPlanVerifyPayment({ installmentPlanNumber })

    // Verifies amount payed
    // For Merchant: please fill the value {MERCHANT_AMOUNT} from your session
    const paymentVerified = verifyResponse.responseHeader?.succeeded 
      && verifyResponse.isPaid 
      && verifyResponse.originalAmountPaid === this.MERCHANT_AMOUNT

    if (paymentVerified) {
      // For Merchant: Success - close order in your system
    }
    else {
        // For Merchant: call the InstallmentPlanCancel function with the installment plan number
    }
  }
}