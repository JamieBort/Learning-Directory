package com.example.gotothemovies.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Movie {
    private String title;
    @JsonProperty("poster_path")
    private String posterPath;
    private String overview;
    private double popularity;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPosterPath() {
        return posterPath;
    }

    public void setPosterPath(String posterPath) {
        this.posterPath = posterPath;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public double getPopularity() {
        return popularity;
    }

    public void setPopularity(double popularity) {
        this.popularity = popularity;
    }

    public Movie(String title, String posterPath, String overview, double popularity) {
        this.title = title;
        this.posterPath = posterPath;
        this.overview = overview;
        this.popularity = popularity;
    }

    public Movie() {
    }
}
