package stepDefinitions;


import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.ConfigurationReader;
import utilities.Driver;
import java.util.concurrent.TimeUnit;

public class Hooks {

    @Before
    public void setup() {
        ConfigurationReader.getProperty("browser");
        Driver.get().manage().window().maximize();
        Driver.get().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }

    @After
    public void teardown(Scenario scenario) {
        if (scenario.isFailed()) {
            byte[] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png", "Name of screenhot");
        } else {
            System.out.println("Cleanup!");
            System.out.println("Test completed!");
        }
        Driver.close();
    }
}