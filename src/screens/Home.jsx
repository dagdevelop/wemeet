import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { useAllEvent } from '../ApiCalls/CustomHooks';
import EventListe from '../components/EventListe';
import TabBar from '../components/TabBar';
import { styles } from '../style/styles';

const Home = ({ navigation }) => {
    const [events] = useAllEvent();
    const [searchCity, setSearchCity] = useState("");
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState([]);

    const updateEventsToShow = useCallback((keyWord, events) => {
        let eventsToShow = [];
        if (keyWord === "") {
            setData(events);
        } else {
            eventsToShow = events.filter(e => e.label.toLowerCase().includes(keyWord.toLowerCase().trim().replace(/\s/g, "")) || e.city_name.toLowerCase().includes(keyWord.toLowerCase().trim().replace(/\s/g, ""))
            );
            setData(eventsToShow);
        }
    }, []);

    useEffect(() => {
        updateEventsToShow(searchCity, events);

    }, [events, updateEventsToShow, searchCity]);



    return (
        <SafeAreaView style={[styles.home.container]}>
            <TabBar
                navigation={navigation}
                title={'Evènements'}
                searchCity={searchCity}
                setSearchCity={setSearchCity}
                clicked={clicked}
                setClicked={setClicked}
            />
            <View style={styles.container}><EventListe events={data} /></View>
        </SafeAreaView>
    );
};

export default Home;