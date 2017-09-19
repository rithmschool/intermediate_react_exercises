import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import Movie from './Movies';
import MovieDetails from './MovieDetails';

const MovieStack = StackNavigator({
  Search: { screen: Movie  },
  MovieDetails: { screen: MovieDetails }
});

export default MovieStack;