import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import data from './src/data';

export default function App() {

  const accountTable = () => (
    <View style={styles.tableContainer}>
      <Text style={styles.tableLabel}>Account Table</Text>
      <View style={styles.tableHeader}>
        <Text style={{width: '15%'}}>ID</Text>
        <Text style={{width: '30%'}}>Username</Text>
        <Text style={{width: '30%'}}>Password</Text>
        <Text style={{width: '25%'}}>UserType</Text>
      </View>
      {data.map((datas, index) => (
        <View key={datas.id} style={index % 2 === 0 ? styles.tableDataEven : styles.tableData}>
          <Text style={{width: '15%'}}>{datas.id}</Text>
          <Text style={{width: '30%'}}>{datas.username}</Text>
          <Text style={{width: '30%'}}>{datas.password}</Text>
          <Text style={{width: '25%'}}>{datas.usertype}</Text>
        </View>
      ))}
    </View>
  );

  const userTable = () => (
      <View style={styles.userContainer}>
        <Text style={styles.tableLabel}>User Table</Text>
        <ScrollView horizontal={true}>
          <View>
            <View style={styles.tableHeader}>
              <Text style={{ flex: 1, minWidth: 100 }}>ID</Text>
              <Text style={{ flex: 2, minWidth: 200 }}>Firstname</Text>
              <Text style={{ flex: 2, minWidth: 200 }}>Lastname</Text>
              <Text style={{ flex: 1, minWidth: 100 }}>Course</Text>
              <Text style={{ flex: 2, minWidth: 200 }}>YearAndSection</Text>
            </View>
            <ScrollView>
              {data.map((datas, index) => (
                <View key={datas.id} style={index % 2 === 0 ? styles.tableDataEven : styles.tableData}>
                  <Text style={{ flex: 1, minWidth: 100 }}>{datas.id}</Text>
                  <Text style={{ flex: 2, minWidth: 200 }}>{datas.name.firstname}</Text>
                  <Text style={{ flex: 2, minWidth: 200 }}>{datas.name.lastname}</Text>
                  <Text style={{ flex: 1, minWidth: 100 }}>{datas.course}</Text>
                  <Text style={{ flex: 2, minWidth: 200 }}>{datas.yearAndSection}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
  );

  const studentTable = () => (
    <View style={styles.studentContainer}>
      <Text style={styles.tableLabel}>Students Table</Text>
      <View style={styles.tableHeader}>
              <Text style={{ width: '15%' }}>ID</Text>
              <Text style={{ width: '50%' }}>Name</Text>
              <Text style={{ width: '30%' }}>Course</Text>
            </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={index % 2 === 0 ? styles.tableDataEven : styles.tableData}>
            <Text style={{ width: '15%' }}>{item.id}</Text>
            <Text style={{ width: '50%' }}>{`${item.name.firstname} ${item.name.lastname}`}</Text>
            <Text style={{ width: '30%' }}>{item.course}</Text>
          </View>
        )}
      />
    </View>
  );
  

  return (
    <View style={styles.container}>
      {accountTable()}
      {userTable()}
      {studentTable()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  tableLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10 
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#4cc9f0',
    borderBottomWidth: 1,
    padding: 10
  },
  tableData: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#caf0f8',
  },
  userContainer: {
    height: 200,
    marginTop: 30
  },
  studentContainer: {
    marginTop: 30
  },

  //to alternate the color of the rows
  tableDataEven: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#caf0f8', 
    borderBottomWidth: 1,
    borderBottomColor: '#caf0f8',
  },
});

