import React, { useEffect } from 'react';
import { useGet } from 'restful-react';
import { useMovie } from '../../Providers/movies';
import { useRouter } from 'next/router';
import { getMovieIdRequestAction } from '../../Providers/movies/action';
import { useDispatch } from 'react-redux';
