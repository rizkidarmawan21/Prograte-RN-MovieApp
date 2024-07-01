import React from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import MovieList from '../components/movies/MovieList'
import type { MovieListProps } from '../../types/app'

const movieLists: MovieListProps[] = [
    {
        title: 'Now Playing in Theater',
        path: 'movie/now_playing?language=en-US&page=1',
        coverType: 'backdrop',
    },
    {
        title: 'Upcoming Movies',
        path: 'movie/upcoming?language=en-US&page=1',
        coverType: 'poster',
    },
    {
        title: 'Top Rated Movies',
        path: 'movie/top_rated?language=en-US&page=1',
        coverType: 'poster',
    },
    {
        title: 'Popular Movies',
        path: 'movie/popular?language=en-US&page=1',
        coverType: 'poster',
    },
]
function HomeScreen(): JSX.Element {
    return (
        <ScrollView>
            <View style={{
                backgroundColor: '#bcb0d1',
                height: 120,
                borderBottomEndRadius: 20,
                borderBottomStartRadius: 20,
                paddingHorizontal: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 25,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <View >
                        <Text style={{
                            fontSize: 20,
                            color: 'black',
                            fontWeight: '600',
                        }}>
                            Hello, John Doe
                        </Text>
                        <Text style={{
                            marginTop: 5,
                            fontSize: 16,
                            color: 'black',
                            fontWeight: '400',
                        }}>
                            Welcome to the movie app
                        </Text>
                    </View>

                    {/* Profile Image in Right */}
                    <Image
                        source={{ uri: 'https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/2017/01/01-5-430x450.jpg' }}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                        }}
                    />
                </View>
            </View>
            <View style={styles.container}>
                {movieLists.map((movieList) => (
                    <MovieList
                        title={movieList.title}
                        path={movieList.path}
                        coverType={movieList.coverType}
                        key={movieList.title}
                    />
                ))}
                <StatusBar translucent={false} />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight ?? 32,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 16,
    },
})

export default HomeScreen
