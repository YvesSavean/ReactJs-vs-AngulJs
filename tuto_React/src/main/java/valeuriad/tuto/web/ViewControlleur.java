package valeuriad.tuto.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewControlleur {

	@RequestMapping(value = "/")
	 public String hello(Model model) {
        return "index";
    }
}