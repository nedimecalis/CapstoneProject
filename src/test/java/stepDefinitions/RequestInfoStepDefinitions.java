package stepDefinitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;
import pages.MainPage;
import pages.RequestInfoPage;
import utilities.ConfigurationReader;
import utilities.Driver;
import utilities.ReusableMethods;

import java.util.concurrent.TimeUnit;

public class RequestInfoStepDefinitions {

    RequestInfoPage requestInfoPage = new RequestInfoPage();

    @When("User clicks on the Request Info module")
    public void user_clicks_on_the_Request_Info_module() {
        requestInfoPage.requestInfo.click();
    }

    @Then("Verify request info form title should be {string}")
    public void verify_request_info_form_title_should_be(String string) {
        ReusableMethods.waitForVisibility(requestInfoPage.requestInfoFormTitle, 5);
        String title = requestInfoPage.requestInfoFormTitle.getText();
        Assert.assertEquals(string, title);
    }

    @Then("verify Captcha checkbox is displayed")
    public void verify_Captcha_checkbox_is_displayed() {
        Driver.get().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Driver.get().switchTo().frame(requestInfoPage.iframe);
        ReusableMethods.waitForVisibility(requestInfoPage.requestInfoCaptcha, 5);
        Assert.assertTrue(requestInfoPage.requestInfoCaptcha.isDisplayed());
    }

    @When("User fill out all information boxes excluding Athlete information")
    public void user_fill_out_all_information_boxes_excluding_Athlete_information() {
        requestInfoPage.requestInfoFillOut();
    }

    @When("User fill out all information boxes including Athlete information")
    public void user_fill_out_all_information_boxes_including_Athlete_information() {
        requestInfoPage.requestInfoFillOut();
        ReusableMethods.waitForClickablity(requestInfoPage.requestInfoAthlete, 5);
        requestInfoPage.requestInfoAthlete.click();
        ReusableMethods.waitForClickablity(requestInfoPage.requestInfo_IamPlaying, 5);
        Select select = new Select(requestInfoPage.requestInfo_IamPlaying);
        select.selectByVisibleText("Football");
        ReusableMethods.waitForClickablity(requestInfoPage.requestInfo_height, 5);
        requestInfoPage.requestInfo_height.sendKeys("1.70 cm");
        ReusableMethods.waitForClickablity(requestInfoPage.requestInfo_weight, 5);
        requestInfoPage.requestInfo_weight.sendKeys("65 kg");
    }

    @When("User fill out all information boxes")
    public void user_fill_out_all_information_boxes() {
        requestInfoPage.requestInfoFillOut();
    }

    @Then("verify Submit button is not clickable")
    public void verify_Submit_button_is_not_clickable() {
        ReusableMethods.waitForVisibility(requestInfoPage.requestInfoSubmitButton, 5);
        Assert.assertFalse(requestInfoPage.requestInfoSubmitButton.isEnabled());
    }}