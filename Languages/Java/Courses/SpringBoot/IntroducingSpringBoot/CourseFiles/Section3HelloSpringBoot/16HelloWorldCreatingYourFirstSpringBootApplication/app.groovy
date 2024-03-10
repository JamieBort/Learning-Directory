@RestController
public class HelloWorld {
    @RequestMapping("/")
    public String home(){
        "Hello, World!"
    }
}