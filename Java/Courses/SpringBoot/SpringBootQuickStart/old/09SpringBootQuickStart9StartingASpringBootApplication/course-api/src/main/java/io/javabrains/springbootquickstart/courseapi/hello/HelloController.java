// package io.github.jiangdequan;
package io.javabrains.springbootquickstart.courseapi.hello;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @RequestMapping("/hello")
    public String sayHi(){
        return "Hi";
    }
}