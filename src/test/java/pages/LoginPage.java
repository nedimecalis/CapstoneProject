package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import utilities.Driver;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

    public class LoginPage extends BasePage {

        @FindBy (xpath = "(//span[.='365 Portal']/../..)[1]   ")
        public WebElement Portal365;

        @FindBy (id = "i0116")
        public WebElement emailBox;

        @FindBy (id = "i0118")
        public WebElement passwordBox;

        @FindBy (id = "idSIButton9")
        public WebElement nextButton;

        @FindBy (css = "[value='Sign in']")
        public WebElement sign_inButton;

        @FindBy (id = "idBtn_Back")
        public WebElement NoButton;

        @FindBy (className = "_2KqWkae0FcyhdNhWQ-Cp-M")
        public WebElement initialsButton;

        @FindBy(id = "mectrl_body_signOut")
        public WebElement signOut;

        @FindBy (id = "idA_PWD_ForgotPassword")
        public WebElement forgotPassword;


        public void switchToChildWindow(){
            Set<String> set = Driver.get().getWindowHandles();
            List<String> list = new ArrayList<>(set);
            Driver.get().getWindowHandle();
//        String parentWindow = list.get(0);
            String childWindow = list.get(1);
            Driver.get().switchTo().window(childWindow);
        }
}
