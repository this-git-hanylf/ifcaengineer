import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';

// import {Card, NativeBaseProvider} from 'native-base';
import {VStack, Box, Divider} from 'native-base';
import numFormat from '@Component/numFormat';
import Style from '../../Theme/Style';
const {width, height} = Dimensions.get('window');

export default function InvoiceCard(props) {
  const {dateNow, totalInvoice, totalInvoiceDue, onPress} = props;

  return (
    <View style={{paddingHorizontal: 10, flex: 1}}>
      <Box
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          shadowOffset: {width: 1, height: 1},
          shadowColor: '#37BEB7',
          shadowOpacity: 0.5,
          // elevation: 5,
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={[
                Style.textBlack,
                {
                  fontSize: 18,
                  fontWeight: '500',
                  textAlign: 'left',
                },
              ]}>
              Invoice Due
            </Text>
            <Text
              style={[
                Style.textBlack,
                {
                  fontSize: 12,
                  fontWeight: '500',
                  textAlign: 'right',
                },
              ]}>
              Total Invoice
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={[
                Style.textGreyLight,
                {
                  fontSize: 12,
                  textAlign: 'left',
                  fontWeight: '300',
                },
              ]}>
              Date {dateNow}
            </Text>
            <View style={{right: 20}}>
              <Text
                style={[
                  Style.textBlack,
                  {
                    fontSize: 30,
                    fontWeight: '500',
                    textAlign: 'right',
                  },
                ]}>
                {totalInvoice}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={[
                Style.textBlack,
                {
                  fontSize: 18,
                  fontWeight: '500',
                  textAlign: 'left',
                  color: '#F99B23',
                },
              ]}>
              Rp. {numFormat(totalInvoiceDue)}
            </Text>
            <View style={{right: 8}}>
              <TouchableOpacity onPress={() => onPress()}>
                <Text style={Style.textGreen}>View All</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <TouchableOpacity style={{ position: 'absolute', right:20,}}>
                <Text>View All</Text>
            </TouchableOpacity> */}
          {/* <TouchableOpacity>
                <Text>19</Text>
            </TouchableOpacity> */}
        </View>
        {/* <VStack space={4} divider={<Divider />}>
        <Box px={4} pt={4}>
          NativeBase
        </Box>
        <Box px={4}>
          NativeBase is a free and open source framework that enable developers
          to build high-quality mobile apps using React Native iOS and Android
          apps with a fusion of ES6.
        </Box>
        <Box px={4} pb={4}>
          GeekyAnts
        </Box>
      </VStack> */}
      </Box>
    </View>
  );
}
