package com.example.gotothemovies;

import com.example.gotothemovies.entity.Movie;
import com.example.gotothemovies.service.TMDBFilteredService;
import com.example.gotothemovies.service.TMDBService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class BasicController {

    private final TMDBService tmdbService;

    private final TMDBFilteredService tmdbFilteredService;

//    @Autowired
//    public BasicController(TMDBFilteredService tmdbFilteredService){
//        this.tmdbFilteredService = tmdbFilteredService;
//    }

    @Autowired
    public BasicController(TMDBService tmdbService, TMDBFilteredService tmdbFilteredService) {
        this.tmdbService = tmdbService;
        this.tmdbFilteredService = tmdbFilteredService;
    }

    @GetMapping("/")
    public String getHome(){
        return "home";
    }

    @GetMapping("/now-playing")
    public String getNowPlaying(Model model){

        List<Movie> movies = tmdbService.getMovies();
        model.addAttribute("movies", movies);
        return "now-playing";
    }

    @GetMapping("/medium-popular-long-name")
    public String getLongName(Model model){
        List<Movie> movies = tmdbFilteredService.getMovies();
        model.addAttribute("movies", movies);
        return "medium-popular-long-name";
    }
}