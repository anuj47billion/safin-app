/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Header from '../../../../common/Header';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RFValue} from 'react-native-responsive-fontsize';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DashboardHome = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Header title="Data" navigation={navigation} />
      <View style={styles.viewBody}>
        <View style={styles.topView}>
          <View style={styles.topCutView} />
          <View style={styles.circleOuterView}>
            <View style={styles.circleInnerView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.push('App', {
                    screen: 'Dashboard',
                    goToInsideScreen: 'DashboardWarning',
                  });
                }}>
                <View
                  style={{
                    borderWidth: 3,
                    borderColor: '#fff',
                    // padding: 55,
                    width: width * 0.55,
                    height: width * 0.55,
                    borderRadius: 80,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: '#fff', fontSize: RFValue(16, height)}}>
                    Baby Tom's Vitals are
                  </Text>
                  <Text style={{color: '#fff', fontSize: RFValue(30, height)}}>
                    Perfect
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.detailsView}>
            <TouchableOpacity
              onPress={() => {
                navigation.push('App', {
                  screen: 'Dashboard',
                  goToInsideScreen: 'Breathing',
                });
              }}
              style={styles.rowDetailView}>
              <Image
                source={require('../../../../assets/image/lungs-solid.png')}
              />
              <Text>20/min</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.push('App', {
                  screen: 'Dashboard',
                  goToInsideScreen: 'BodyTemperature',
                });
              }}
              style={styles.rowDetailView}>
              <FontAwesome5 name="temperature-low" size={RFValue(24, height)} />
              <Text>100.8 F</Text>
            </TouchableOpacity>

            <View style={styles.rowDetailView}>
              <Image
                source={require('../../../../assets/image/back-solid.png')}
              />
              <Text>Back</Text>
            </View>
          </View>
          <View style={[styles.detailsView, styles.marginView]}>
            <View
              style={[
                styles.bottomRowDetailView,
                {backgroundColor: '#edeff0'},
              ]}>
              <Entypo color="#A7AFBE" name="heart" size={RFValue(24, height)} />
              <Text>120 BPM</Text>
            </View>
            <View
              style={[
                styles.bottomRowDetailView,
                {backgroundColor: '#edeff0'},
              ]}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: RFValue(24, height),
                    fontWeight: '700',
                    color: '#A7AFBE',
                  }}>
                  O
                </Text>
                <Text style={{fontWeight: '700', color: '#A7AFBE'}}>2</Text>
              </View>
              <Text>95%</Text>
            </View>
            <View
              style={[
                styles.bottomRowDetailView,
                {backgroundColor: '#edeff0'},
              ]}>
              <FontAwesome
                color="#A7AFBE"
                name="bed"
                size={RFValue(24, height)}
              />
              <Text>Soft</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DashboardHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBody: {
    flex: 0.91,
    flexDirection: 'column',
    backgroundColor: '#F5FBFF',
  },
  topView: {
    flex: 0.55,
    flexDirection: 'column',
  },
  bottomView: {
    flex: 0.45,
    flexDirection: 'column',
  },
  detailsView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  rowDetailView: {
    width: height * 0.127,
    height: height * 0.127,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  bottomRowDetailView: {
    width: height * 0.127,
    height: height * 0.127,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  topCutView: {
    flex: 0.6,
    backgroundColor: '#22D78A',
    borderBottomRightRadius: 125,
    borderBottomLeftRadius: 125,
  },
  circleOuterView: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleInnerView: {
    borderWidth: 5,
    // padding: 60,
    marginTop: -140,
    backgroundColor: '#22D78A',
    borderRadius: 80,
    borderColor: '#22D78A',
  },
  marginView: {
    marginTop: 20,
  },
});
