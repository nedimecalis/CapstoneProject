package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import utilities.ReusableMethods;

public class MainPage extends BasePage {

    @FindBy(className = "fusion-logo-link")
    public WebElement logo;

    @FindBy(xpath = "(//span[@class='menu-text'])[6]")
    public WebElement giftShop;

    @FindBy(xpath = " (//div[@class='textwidget custom-html-widget'])[2]")
    public WebElement contactInf;

    @FindBy(css = ".ubermenu-search-input")
    public WebElement searchBox;

    @FindBy(xpath = "//h1[contains(text(),'Oops!')]")
    public WebElement warningMessage;

    public void searchBox(String str) {
        ReusableMethods.waitForVisibility(searchBox, 5);
        searchBox.sendKeys(str);
        ReusableMethods.wait(3);
        ReusableMethods.waitForClickablity(searchBox, 5);
        searchBox.submit();
    }
}