import {
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { authorisation } from "../../firebaseConfig";
const backgroundImage = require("../../assets/images/duotone.jpg");
import { useDispatch, useSelector } from "react-redux";
import { getReservationsByUserEmail } from "../../features/reservationSlice";
import ReservationCard from "../../components/reservationCard";

export default function List() {
  const dispatch = useDispatch();
  const { reservationsList } = useSelector((store) => store.reservation);
  const { userEmail } = useSelector((store) => store.login);
  
  useEffect(() => {
    const user = authorisation.currentUser;
    console.log("list.js line 22 userEmail: ", reservationsList);
    dispatch(getReservationsByUserEmail(userEmail));
  }, []);

  return (
    <ImageBackground
      source={backgroundImage}
      style={{ width: "100%", height: "100%" }}
    >
      {reservationsList.map((reservation) => (
        <ReservationCard key={reservation.id} reservation={reservation} />
      ))}
      
    </ImageBackground>
  );
}
