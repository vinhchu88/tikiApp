import React from "react";
import { StyleSheet, View, StatusBar, FlatList, Text } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Header from "../components/HeaderComponent";

const NotificationItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemTopContainer}>
      <View
        style={[
          styles.itemTypeContainer,
          {
            backgroundColor: item.type === 1 ? "#fc820a" : "#dc3988",
          },
        ]}
      >
        <MaterialCommunityIcons
          name={item.type === 1 ? "sale" : "backup-restore"}
          color="#fff"
          size={22}
        />
      </View>
      <View style={styles.itemTopTextContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDate}>{item.date}</Text>
      </View>
    </View>
    <View>
      <Text style={styles.itemDetail}>{item.detail}</Text>
    </View>
  </View>
);

const NotificationScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      {/*  */}
      <Header title="Notification" />
      <View style={styles.bodyContainer}>
        <View>
          <View style={styles.buttonActiveContainer}>
            <View style={styles.activeMark} />
            <MaterialCommunityIcons
              name="home"
              color="#949494"
              size={22}
              style={styles.activeIcon}
            />
          </View>
          <View style={styles.buttonInactiveContainer}>
            <MaterialCommunityIcons
              name="backup-restore"
              color="#949494"
              size={22}
            />
          </View>
          <View style={styles.buttonInactiveContainer}>
            <MaterialCommunityIcons name="sale" color="#949494" size={22} />
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={[
              {
                id: 1,
                type: 1,
                name: "Anker Gi???m Kh???ng 40% Duy Nh???t H??m Nay 13/11",
                date: "13/11/2018",
                detail:
                  "Anker Gi???m Kh???ng 40% Duy Nh???t H??m Nay 13/11 - S??? L?????ng C?? H???n",
              },
              {
                id: 2,
                type: 2,
                name: "G???I ?? QU?? T???NG 20.10",
                date: "02/11/2018",
                detail:
                  "NH???P M?? UUDAIT11 GI???M 50K CHO ????N H??NG 700K. ??p d???ng cho s???n ph???m ng??nh ??i???n Gia D???ng. XEM NGAY!",
              },
              {
                id: 3,
                type: 1,
                name: "Anker Gi???m Kh???ng 40% Duy Nh???t H??m Nay 13/11",
                date: "13/11/2018",
                detail:
                  "Anker Gi???m Kh???ng 40% Duy Nh???t H??m Nay 13/11 - S??? L?????ng C?? H???n",
              },
              {
                id: 4,
                type: 2,
                name: "G???I ?? QU?? T???NG 20.10",
                date: "02/11/2018",
                detail:
                  "NH???P M?? UUDAIT11 GI???M 50K CHO ????N H??NG 700K. ??p d???ng cho s???n ph???m ng??nh ??i???n Gia D???ng. XEM NGAY!",
              },
              {
                id: 5,
                type: 1,
                name: "Anker Gi???m Kh???ng 40% Duy Nh???t H??m Nay 13/11",
                date: "13/11/2018",
                detail:
                  "Anker Gi???m Kh???ng 40% Duy Nh???t H??m Nay 13/11 - S??? L?????ng C?? H???n",
              },
              {
                id: 6,
                type: 2,
                name: "G???I ?? QU?? T???NG 20.10",
                date: "02/11/2018",
                detail:
                  "NH???P M?? UUDAIT11 GI???M 50K CHO ????N H??NG 700K. ??p d???ng cho s???n ph???m ng??nh ??i???n Gia D???ng. XEM NGAY!",
              },
            ]}
            keuExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <NotificationItem item={item} />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: "#ededed",
    flexDirection: "row",
  },
  buttonActiveContainer: {
    backgroundColor: "#fff",
    // padding: 12,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  buttonInactiveContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  activeMark: {
    backgroundColor: "#1e88e5",
    width: 4,
    height: 10,
  },
  activeIcon: {
    padding: 12,
    marginLeft: -4,
  },
  //
  listContainer: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: "#e5e5e5",
  },
  itemContainer: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomColor: "#dedede",
    borderBottomWidth: 1,
  },
  itemTopContainer: {
    flexDirection: "row",
  },
  itemTypeContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  itemTopTextContainer: {
    marginRight: 40,
    marginLeft: 4,
  },
  itemName: {
    color: "#000",
    fontWeight: "500",
  },
  itemDate: {
    color: "#787878",
    fontSize: 12,
    marginTop: 8,
  },
  itemDetail: {
    color: "#787878",
    // fontSize: 12,
    marginTop: 12,
  },
});

export default NotificationScreen;
