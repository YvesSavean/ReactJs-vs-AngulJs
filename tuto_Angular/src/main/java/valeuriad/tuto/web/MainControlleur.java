package valeuriad.tuto.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import valeuriad.tuto.domain.City;
import valeuriad.tuto.domain.ICityDao;

@Controller
@RequestMapping("/city")
public class MainControlleur {

	private final ICityDao repository;

	@Autowired
	public MainControlleur(ICityDao repository) {
		this.repository = repository;
	}

	@RequestMapping(value = "/getCity", method = RequestMethod.GET)
	@ResponseBody
	public List<City> getAll() {
		List<City> city = repository.findAll();
		return city;
	}

}