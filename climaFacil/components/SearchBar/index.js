import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from './style';
import colors from '../../constants/colors';

const SearchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleTextChange = (text) => {
        setSearchText(text);
        onSearch(text);
    };

    return (
        <View style={style.container}>
            <View style={style.border}>
                <Ionicons style={style.icon} name="location-outline" size={30} />
                <TextInput style={style.input} placeholder="Sua localização" placeholderTextColor={colors.primaryWhite} value={searchText} onChangeText={handleTextChange}/>
            </View>
        </View>
    );
};

export default SearchBar;