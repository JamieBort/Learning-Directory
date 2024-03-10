//@Grab("spring-boot-starter-web")

// import org.springframework.web.bind.annotation.RestController
// Plus a bunch of other imports...

@RestController
// @EnableAutoConfiguration
public class HelloWorld {
    @RequestMapping("/")
    public String home(){
        "Hello, World!"
    }

    // public static void main(String[] args){
        // SpringApplication.run(helloWorld.class,args);
    // }

}