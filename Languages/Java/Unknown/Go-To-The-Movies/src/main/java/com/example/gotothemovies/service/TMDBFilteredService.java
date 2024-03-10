package com.example.gotothemovies.service;

import com.example.gotothemovies.entity.Movie;
import com.example.gotothemovies.entity.MovieResults;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class TMDBFilteredService {

    public static final String API_ADDRESS = "https://api.themoviedb.org/3/movie/now_playing";
    private final String apiToken;

    public TMDBFilteredService(@Value("${api_key}") String apiToken) {
        this.apiToken = apiToken;
    }

    public List<Movie> getMovies() {
        RestTemplate restTemplate = new RestTemplate();
        List<Movie> movies =
                restTemplate.getForObject(API_ADDRESS + "?api_key=" + this.apiToken + "&sort_by=vote_average.desc&vote_average.gte=4&vote_average.lte=7", MovieResults.class).getResults();


        System.out.println(movies);
        System.out.println("where are you?");
        return movies.stream().filter(movie -> movie.getTitle().length() > 10).collect(Collectors.toList());
    }

}