/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
// import database from '@react-native-firebase/database';

import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {ScrollView} from 'react-native-gesture-handler';
// import DatePicker from 'react-native-datepicker';
// import DateTimePicker from '@react-native-community/datetimepicker';

const HomeScreen: React.FC<{navigation: StackNavigationProp<any>}> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Image source={require('./asset/Tanams.jpeg')} style={styles.image} />
      <Text style={styles.text}>Tanams</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Items')}>
        <Text style={styles.buttonText}>Press me!</Text>
      </TouchableOpacity>
    </View>
  );
};

const SecondScreen: React.FC<{navigation: StackNavigationProp<any>}> = ({
  navigation,
}) => {
  return (
    <ScrollView>
      <View style={styles.container2}>
        <Text style={styles.text2}>Welcome to Tanams</Text>
        <Text style={styles.text3}>
          Tanams is a car rental place in the central Jakarta area, specifically
          around Soekarno Hatta Airport.
        </Text>
        <Image source={require('./asset/mobil3.jpg')} style={styles.image2} />
        <Text style={styles.text2}>Hyundai Stargezer</Text>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('Mobil1')}>
          <Text style={styles.buttonText2}>Press me!</Text>
        </TouchableOpacity>
        <Image source={require('./asset/mobil10.jpg')} style={styles.image2} />
        <Text style={styles.text2}>Mitsubishi Xpander</Text>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('Mobil2')}>
          <Text style={styles.buttonText2}>Press me!</Text>
        </TouchableOpacity>
        <Image source={require('./asset/mobil14.jpeg')} style={styles.image2} />
        <Text style={styles.text2}>Toyota Agya G</Text>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('Mobil3')}>
          <Text style={styles.buttonText2}>Press me!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const ThirdScreen: React.FC<{navigation: StackNavigationProp<any>}> = ({
  navigation,
}) => {
  const handleRentalOption = (rentalType: string) => {
    // Handle the navigation based on the selected rental type
    switch (rentalType) {
      case 'daily':
        navigation.navigate('DailyRental');
        break;
      case 'weekly':
        navigation.navigate('WeeklyRental');
        break;
      case 'monthly':
        navigation.navigate('MonthlyRental');
        break;
      default:
        break;
    }
  };
  return (
    <ScrollView>
      <View style={styles.container2}>
        <Text style={styles.text2}>Welcome to Tanams</Text>
        <Text style={styles.text3}>Choose Your Type</Text>
        <Image source={require('./asset/mobil3.jpg')} style={styles.image2} />

        {/* Detailed Explanation about Education Saving Money */}
        <View style={styles.educationContainer}>
          <Text style={styles.educationHeading}>
            Hyundai Stargezer at type Style 2023 Abu-Abu Genap
          </Text>
          <Text style={styles.educationText}>
            Berikut adalah penjelasan lengkap mengenai mobil Hyundai Stargezer
            tipe Style 2023 warna Abu-Abu dengan nomor polisi genap untuk
            disewakan di rental mobil: Hyundai Stargazer merupakan MPV 7-seater
            yang diproduksi oleh Hyundai Motors sejak tahun 2022. Stargazer tipe
            Style merupakan varian tertinggi dari model ini dengan beberapa
            fitur premium seperti: - Mesin bensin 4-silinder 1.5L dengan tenaga
            maksimal 115 HP dan torsi maksimal 144 Nm, transmisi otomatis
            6-percepatan. - Fitur keselamatan canggih: ABS, EBD, Brake Assist,
            ESC, Hill Start Assist, Vehicle Stability Management, hingga 6
            airbag. - Exterior: Lampu LED, alloy wheel 17 inci, side mirror
            electric foldable, shark fin antenna. - Interior: Jok kulit,
            steering wheel multifungsi, head unit 8" touchscreen, 4 speaker,
            wireless charger. - Kenyamanan: AC dual blower, rear AC vent, power
            window all, smart key entry with push start button. Untuk tahun
            2023, Hyundai Stargazer Style tersedia dalam 7 pilihan warna salah
            satunya Abu-Abu. Dengan nomor polisi genap (contoh: B 1234 ABC),
            mobil ini dapat disewakan di rental mobil untuk area Jakarta dan
            sekitarnya dengan tarif sewa per hari mulai dari Rp 350.000-Rp
            500.000 tergantung durasi sewa. Biaya sewa termasuk asuransi, PPN
            10%, maintenance, dan sopir. Biasanya minimal sewa adalah 5 hari.
            Ada potongan biaya untuk sewa mingguan atau bulanan. Bahan bakar
            menggunakan sistem rembours. Fasilitas lain dari rental mobil yang
            diberikan adalah servis berkala, bantuan darurat 24 jam, dan ganti
            mobil gratis jika terjadi kerusakan saat sewa. Dengan performa baik,
            fitur lengkap, dan kenyamanan tinggi, Hyundai Stargazer 2023
            merupakan pilihan mobil rental keluarga yang cocok untuk perjalanan
            jarak jauh maupun sehari-hari.
            {/* ... (Tambahkan penjelasan lebih lanjut sesuai kebutuhan) */}
          </Text>
          <Text style={styles.text3}>Choose Your Rental Type</Text>
          <View style={styles.rentalOptionsContainer}>
            <TouchableOpacity
              style={styles.rentalOptionButton}
              onPress={() => handleRentalOption('daily')}>
              <Text style={styles.rentalOptionText}>Per Day</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.rentalOptionButton}
              onPress={() => handleRentalOption('weekly')}>
              <Text style={styles.rentalOptionText}>Per Week</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.rentalOptionButton}
              onPress={() => handleRentalOption('monthly')}>
              <Text style={styles.rentalOptionText}>Per Month</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Navigation buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Items')}>
            <Text style={styles.buttonText}>Items</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Tanams')}>
            <Text style={styles.buttonText}>TANAMS RENT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const DailyRentalScreen: React.FC<{navigation: StackNavigationProp<any>}> = ({
  navigation,
}) => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');
  // const [rentalDate, setRentalDate] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const banks = ['Mandiri', 'BCA', 'BNI', 'BRI'];

  // const handleSendData = async () => {
  //   try {
  //     // Save data to Firebase Realtime Database
  //     const response = await database()
  //       .ref('rentalData')
  //       .push({
  //         fullName,
  //         address,
  //         email,
  //         bankAccountNumber,
  //         bankName: selectedBank || bankName, // Use selectedBank if available, otherwise use manually entered bankName
  //         accountHolderName,
  //         fromDate,
  //         toDate,
  //       });

  //     // Log the response (contains information about the saved data)
  //     console.log('Data saved to Firebase:', response);

  //     // Navigate to the Invoice screen with the newly generated ID
  //     navigation.navigate('Invoice', {rentalId: response.key});
  //   } catch (error) {
  //     console.error('Error saving data to Firebase:', error);
  //     // Handle error as needed
  //   }
  // };
  return (
    <ScrollView>
      <View style={styles.container2}>
        <Text style={styles.text2}>Welcome to Tanams</Text>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Full Name:</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={text => setFullName(text)}
          />

          <Text style={styles.label}>Address:</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={text => setAddress(text)}
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Bank Account Number:</Text>
          <TextInput
            style={styles.input}
            value={bankAccountNumber}
            onChangeText={text => setBankAccountNumber(text)}
            keyboardType="numeric"
          />

          {/* <Text style={styles.label}>Bank Name:</Text>
          <TextInput
            style={styles.input}
            value={bankName}
            onChangeText={text => setBankName(text)}
          /> */}

          <Text style={styles.label}>Account Holder Name:</Text>
          <TextInput
            style={styles.input}
            value={accountHolderName}
            onChangeText={text => setAccountHolderName(text)}
          />

          {/* <Text style={styles.label}>Rental Date:</Text>
          <TextInput
            style={styles.input}
            value={rentalDate}
            onChangeText={text => setRentalDate(text)}
            placeholder="YYYY-MM-DD"
          /> */}

          <Text style={styles.label}>From Date:</Text>
          <Text>sesuaikan penulisan tanggal seperti : 01-09-2023</Text>
          <TextInput
            style={styles.input}
            value={fromDate}
            onChangeText={text => setFromDate(text)}
            placeholder="DD-MM-YYYY"
          />
          <Text style={styles.label}>To Date:</Text>
          <TextInput
            style={styles.input}
            value={toDate}
            onChangeText={text => setToDate(text)}
            placeholder="DD-MM-YYYY"
          />
          {/* <DateTimePicker
            value={new Date(fromDate)}
            mode="date"
            display="default"
            onChange={(event, date) =>
              date && setFromDate(date.toISOString().split('T')[0])
            }
          /> */}

          {/* <Text style={styles.label}>To Date:</Text>
          <DateTimePicker
            value={new Date(toDate)}
            mode="date"
            display="default"
            onChange={(event, date) =>
              date && setToDate(date.toISOString().split('T')[0])
            }
          /> */}
        </View>
        <View style={styles.container3}>
          <Text style={styles.label2}>Bank Name:</Text>
          <Picker
            selectedValue={selectedBank}
            onValueChange={(itemValue, _itemIndex) =>
              setSelectedBank(itemValue)
            }
            style={styles.picker}>
            <Picker.Item label="Select a bank" value="" />
            {banks.map((bank, index) => (
              <Picker.Item key={index} label={bank} value={bank} />
            ))}
          </Picker>

          <Text style={styles.label2}>Other Bank Name:</Text>
          <TextInput
            style={styles.input2}
            value={bankName}
            onChangeText={text => setBankName(text)}
          />
        </View>

        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Invoice')}>
          <Text style={styles.buttonText}>Send Data</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Invoice', {
              fullName,
              address,
              email,
              bankAccountNumber,
              bankName: selectedBank || bankName,
              accountHolderName,
              fromDate,
              toDate,
              selectedBank,
              banks,
            })
          }>
          <Text style={styles.buttonText}>Send Data</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const WeeklyRentalScreen: React.FC<{navigation: StackNavigationProp<any>}> = ({
  navigation,
}) => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');
  // const [rentalDate, setRentalDate] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const banks = ['Mandiri', 'BCA', 'BNI', 'BRI'];

  // const handleSendData = () => {
  //   // Implement logic to send the data, e.g., API call or navigation to confirmation screen
  //   // For now, we'll just log the data to the console
  //   console.log({
  //     fullName,
  //     address,
  //     email,
  //     bankAccountNumber,
  //     bankName,
  //     accountHolderName,
  //     // rentalDate,
  //     fromDate,
  //     toDate,
  //     selectedBank,
  //     banks,
  //   });
  // };

  return (
    <ScrollView>
      <View style={styles.container2}>
        <Text style={styles.text2}>Welcome to Tanams</Text>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Full Name:</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={text => setFullName(text)}
          />

          <Text style={styles.label}>Address:</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={text => setAddress(text)}
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Bank Account Number:</Text>
          <TextInput
            style={styles.input}
            value={bankAccountNumber}
            onChangeText={text => setBankAccountNumber(text)}
            keyboardType="numeric"
          />

          {/* <Text style={styles.label}>Bank Name:</Text>
          <TextInput
            style={styles.input}
            value={bankName}
            onChangeText={text => setBankName(text)}
          /> */}

          <Text style={styles.label}>Account Holder Name:</Text>
          <TextInput
            style={styles.input}
            value={accountHolderName}
            onChangeText={text => setAccountHolderName(text)}
          />

          {/* <Text style={styles.label}>Rental Date:</Text>
          <TextInput
            style={styles.input}
            value={rentalDate}
            onChangeText={text => setRentalDate(text)}
            placeholder="YYYY-MM-DD"
          /> */}

          <Text style={styles.label}>From Week:</Text>
          <Text>sesuaikan penulisan tanggal seperti : 01-09-2023</Text>
          <TextInput
            style={styles.input}
            value={fromDate}
            onChangeText={text => setFromDate(text)}
            placeholder="DD-MM-YYYY"
          />
          <Text style={styles.label}>To Week:</Text>
          <TextInput
            style={styles.input}
            value={toDate}
            onChangeText={text => setToDate(text)}
            placeholder="DD-MM-YYYY"
          />
          {/* <DateTimePicker
            value={new Date(fromDate)}
            mode="date"
            display="default"
            onChange={(event, date) =>
              date && setFromDate(date.toISOString().split('T')[0])
            }
          /> */}

          {/* <Text style={styles.label}>To Date:</Text>
          <DateTimePicker
            value={new Date(toDate)}
            mode="date"
            display="default"
            onChange={(event, date) =>
              date && setToDate(date.toISOString().split('T')[0])
            }
          /> */}
        </View>
        <View style={styles.container3}>
          <Text style={styles.label2}>Bank Name:</Text>
          <Picker
            selectedValue={selectedBank}
            onValueChange={(itemValue, _itemIndex) =>
              setSelectedBank(itemValue)
            }
            style={styles.picker}>
            <Picker.Item label="Select a bank" value="" />
            {banks.map((bank, index) => (
              <Picker.Item key={index} label={bank} value={bank} />
            ))}
          </Picker>

          <Text style={styles.label2}>Other Bank Name:</Text>
          <TextInput
            style={styles.input2}
            value={bankName}
            onChangeText={text => setBankName(text)}
          />
        </View>

        {/* <TouchableOpacity style={styles.button} onPress={handleSendData}>
          <Text style={styles.buttonText}>Send Data</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Invoice', {
              fullName,
              address,
              email,
              bankAccountNumber,
              bankName: selectedBank || bankName,
              accountHolderName,
              fromDate,
              toDate,
              selectedBank,
              banks,
            })
          }>
          <Text style={styles.buttonText}>Send Data</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const MonthlyRentalScreen: React.FC<{navigation: StackNavigationProp<any>}> = ({
  navigation,
}) => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');
  // const [rentalDate, setRentalDate] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const banks = ['Mandiri', 'BCA', 'BNI', 'BRI'];

  // const handleSendData = () => {
  //   // Implement logic to send the data, e.g., API call or navigation to confirmation screen
  //   // For now, we'll just log the data to the console
  //   console.log({
  //     fullName,
  //     address,
  //     email,
  //     bankAccountNumber,
  //     bankName,
  //     accountHolderName,
  //     // rentalDate,
  //     fromDate,
  //     toDate,
  //     selectedBank,
  //     banks,
  //   });
  // };

  return (
    <ScrollView>
      <View style={styles.container2}>
        <Text style={styles.text2}>Welcome to Tanams</Text>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Full Name:</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={text => setFullName(text)}
          />

          <Text style={styles.label}>Address:</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={text => setAddress(text)}
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Bank Account Number:</Text>
          <TextInput
            style={styles.input}
            value={bankAccountNumber}
            onChangeText={text => setBankAccountNumber(text)}
            keyboardType="numeric"
          />

          {/* <Text style={styles.label}>Bank Name:</Text>
          <TextInput
            style={styles.input}
            value={bankName}
            onChangeText={text => setBankName(text)}
          /> */}

          <Text style={styles.label}>Account Holder Name:</Text>
          <TextInput
            style={styles.input}
            value={accountHolderName}
            onChangeText={text => setAccountHolderName(text)}
          />

          {/* <Text style={styles.label}>Rental Date:</Text>
          <TextInput
            style={styles.input}
            value={rentalDate}
            onChangeText={text => setRentalDate(text)}
            placeholder="YYYY-MM-DD"
          /> */}

          <Text style={styles.label}>From Month:</Text>
          <Text>sesuaikan penulisan tanggal seperti : 01-09-2023</Text>
          <TextInput
            style={styles.input}
            value={fromDate}
            onChangeText={text => setFromDate(text)}
            placeholder="DD-MM-YYYY"
          />
          <Text style={styles.label}>To Month:</Text>
          <TextInput
            style={styles.input}
            value={toDate}
            onChangeText={text => setToDate(text)}
            placeholder="DD-MM-YYYY"
          />
          {/* <DateTimePicker
            value={new Date(fromDate)}
            mode="date"
            display="default"
            onChange={(event, date) =>
              date && setFromDate(date.toISOString().split('T')[0])
            }
          /> */}

          {/* <Text style={styles.label}>To Date:</Text>
          <DateTimePicker
            value={new Date(toDate)}
            mode="date"
            display="default"
            onChange={(event, date) =>
              date && setToDate(date.toISOString().split('T')[0])
            }
          /> */}
        </View>
        <View style={styles.container3}>
          <Text style={styles.label2}>Bank Name:</Text>
          <Picker
            selectedValue={selectedBank}
            onValueChange={(itemValue, _itemIndex) =>
              setSelectedBank(itemValue)
            }
            style={styles.picker}>
            <Picker.Item label="Select a bank" value="" />
            {banks.map((bank, index) => (
              <Picker.Item key={index} label={bank} value={bank} />
            ))}
          </Picker>

          <Text style={styles.label2}>Other Bank Name:</Text>
          <TextInput
            style={styles.input2}
            value={bankName}
            onChangeText={text => setBankName(text)}
          />
        </View>

        {/* <TouchableOpacity style={styles.button} onPress={handleSendData}>
          <Text style={styles.buttonText}>Send Data</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Invoice', {
              fullName,
              address,
              email,
              bankAccountNumber,
              bankName: selectedBank || bankName,
              accountHolderName,
              fromDate,
              toDate,
              selectedBank,
              banks,
            })
          }>
          <Text style={styles.buttonText}>Send Data</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const FourthScreen: React.FC<{navigation: StackNavigationProp<any>}> = ({
  navigation,
}) => {
  const handleRentalOption = (rentalType: string) => {
    // Handle the navigation based on the selected rental type
    switch (rentalType) {
      case 'daily':
        navigation.navigate('DailyRental');
        break;
      case 'weekly':
        navigation.navigate('WeeklyRental');
        break;
      case 'monthly':
        navigation.navigate('MonthlyRental');
        break;
      default:
        break;
    }
  };
  return (
    <ScrollView>
      <View style={styles.container2}>
        <Text style={styles.text2}>Welcome to Tanams</Text>
        <Text style={styles.text3}>Choose Your Type</Text>
        <Image source={require('./asset/mobil10.jpg')} style={styles.image2} />

        {/* Detailed Explanation about Education Saving Money */}
        <View style={styles.educationContainer}>
          <Text style={styles.educationHeading}>
            Mitsubishi Xpander Ultimate at 2023 Hitam Genap
          </Text>
          <Text style={styles.educationText}>
            Berikut adalah penjelasan lengkap mengenai Mitsubishi Xpander
            Ultimate tahun 2023 warna hitam dengan nomor polisi genap yang
            disewakan di rental mobil: Mitsubishi Xpander Ultimate merupakan
            varian tertinggi dari MPV 7-seater Mitsubishi Xpander. Beberapa
            fitur premium yang dimiliki Xpander Ultimate 2023 antara lain: Mesin
            bensin 4-silinder 1.5L MIVEC, tenaga maksimal 105 HP, transmisi
            otomatis 4-percepatan. - Fitur keselamatan: Dual SRS airbag, ABS,
            EBD, brake assist system, stability control, hill start assist. -
            Exterior: LED headlamp, fog lamp, 17 inch alloy wheel, electric
            foldable side mirror. - Interior: Jok kulit, multi-information
            display, 8 speaker Rockford Fosgate. - Kenyamanan: Push start
            button, auto AC dual zone, keyless entry, power window all. Untuk
            tahun 2023, Xpander Ultimate tersedia dalam 5 pilihan warna salah
            satunya hitam. Dengan nomor polisi genap (contoh: B 2345 CDE), mobil
            ini dapat disewakan di rental mobil untuk area Jakarta dan
            sekitarnya dengan tarif sewa per hari mulai dari Rp 300.000 - Rp
            450.000 tergantung durasi sewa. Biaya sudah termasuk asuransi,
            pajak, sopir, dan maintenance. Biasanya minimal sewa 5 hari.
            Potongan biaya berlaku untuk sewa mingguan atau bulanan. Bahan bakar
            menggunakan sistem rembours. Fasilitas lain dari rental mobil
            meliputi layanan antar-jemput, bantuan darurat 24 jam, dan ganti
            mobil jika mogok. Mitsubishi Xpander Ultimate merupakan pilihan MPV
            mewah dan nyaman yang cocok untuk keperluan bisnis atau pun liburan
            keluarga.
            {/* ... (Tambahkan penjelasan lebih lanjut sesuai kebutuhan) */}
          </Text>
          <Text style={styles.text3}>Choose Your Rental Type</Text>
          <View style={styles.rentalOptionsContainer}>
            <TouchableOpacity
              style={styles.rentalOptionButton}
              onPress={() => handleRentalOption('daily')}>
              <Text style={styles.rentalOptionText}>Per Day</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.rentalOptionButton}
              onPress={() => handleRentalOption('weekly')}>
              <Text style={styles.rentalOptionText}>Per Week</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.rentalOptionButton}
              onPress={() => handleRentalOption('monthly')}>
              <Text style={styles.rentalOptionText}>Per Month</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Navigation buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Items')}>
            <Text style={styles.buttonText}>Items</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Tanams')}>
            <Text style={styles.buttonText}>TANAMS RENT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const FifthScreen: React.FC<{navigation: StackNavigationProp<any>}> = ({
  navigation,
}) => {
  const handleRentalOption = (rentalType: string) => {
    // Handle the navigation based on the selected rental type
    switch (rentalType) {
      case 'daily':
        navigation.navigate('DailyRental');
        break;
      case 'weekly':
        navigation.navigate('WeeklyRental');
        break;
      case 'monthly':
        navigation.navigate('MonthlyRental');
        break;
      default:
        break;
    }
  };
  return (
    <ScrollView>
      <View style={styles.container2}>
        <Text style={styles.text2}>Welcome to Tanams</Text>
        <Text style={styles.text3}>Choose Your Type</Text>
        <Image source={require('./asset/mobil14.jpeg')} style={styles.image2} />

        {/* Detailed Explanation about Education Saving Money */}
        <View style={styles.educationContainer}>
          <Text style={styles.educationHeading}>
            Toyota Agya G at 1,2 2018 Hitam Ganjil
          </Text>
          <Text style={styles.educationText}>
            Berikut adalah penjelasan lengkap mengenai Toyota Agya G tahun 2018
            warna hitam dengan nomor polisi ganjil yang disewakan di rental
            mobil: Toyota Agya G merupakan varian menengah dari city car Toyota
            Agya. Beberapa fitur Toyota Agya G tahun 2018 antara lain: - Mesin
            bensin 4-silinder 1.2L, tenaga maksimal 87 HP, transmisi manual
            5-percepatan. - Fitur keselamatan: Dual SRS airbag, rem ABS, EBD,
            seatbelt penumpang depan pengunci otomatis. - Exterior: Pelek baja
            dengan wheel cap, lampu utama halogen. - Interior: Single DIN head
            unit, jok kain, AC manual. - Kenyamanan: Power window depan, power
            steering. Untuk tahun 2018, Toyota Agya G tersedia dalam 6 pilihan
            warna salah satunya hitam. Dengan nomor polisi ganjil (contoh: B
            1111 ABC), mobil ini dapat disewakan di rental mobil untuk area
            Jakarta dan sekitarnya dengan tarif sewa per hari mulai dari Rp
            200.000 - Rp 250.000 tergantung durasi sewa. Biaya sudah termasuk
            asuransi, pajak, sopir, dan perawatan rutin. Biasanya minimal sewa 5
            hari. Ada potongan biaya untuk sewa mingguan atau bulanan. Bahan
            bakar menggunakan sistem rembours. Fasilitas lain dari rental mobil
            antara lain layanan antar-jemput, bantuan darurat 24 jam, dan
            penggantian mobil jika mogok. Toyota Agya merupakan mobil sewaan
            murah yang nyaman digunakan untuk keperluan sehari-hari di
            perkotaan.
            {/* ... (Tambahkan penjelasan lebih lanjut sesuai kebutuhan) */}
          </Text>
          <Text style={styles.text3}>Choose Your Rental Type</Text>
          <View style={styles.rentalOptionsContainer}>
            <TouchableOpacity
              style={styles.rentalOptionButton}
              onPress={() => handleRentalOption('daily')}>
              <Text style={styles.rentalOptionText}>Per Day</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.rentalOptionButton}
              onPress={() => handleRentalOption('weekly')}>
              <Text style={styles.rentalOptionText}>Per Week</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.rentalOptionButton}
              onPress={() => handleRentalOption('monthly')}>
              <Text style={styles.rentalOptionText}>Per Month</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Navigation buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Items')}>
            <Text style={styles.buttonText}>Items</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Tanams')}>
            <Text style={styles.buttonText}>TANAMS RENT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const SixScreen: React.FC<{navigation: StackNavigationProp<any>}> = ({
  navigation,
}) => {
  return (
    <ScrollView>
      <View style={styles.container2}>
        <Text style={styles.text2}>Welcome to Tanams</Text>
        <Text style={styles.text3}>Choose Your Favorite Plan</Text>
        <Image source={require('./asset/Tanams.jpeg')} style={styles.image2} />

        {/* Detailed Explanation about Education Saving Money */}
        <View style={styles.educationContainer}>
          <Text style={styles.educationHeading}>TANAMS RENT</Text>
          <Text style={styles.educationText}>
            TANAMS RENT: - "Sewa Mobil Untuk Setiap Perjalanan Anda" Menekankan
            posisi TANAMS RENT sebagai jasa sewa mobil yang dapat memenuhi
            kebutuhan transportasi pelanggan untuk berbagai perjalanan, baik
            bisnis maupun liburan. - "Sewa Mobil Terbaik dan Terpercaya"
            Mengusung citra TANAMS RENT sebagai perusahaan penyewaan mobil
            dengan armada dan layanan berkualitas terbaik serta dapat dipercaya.
            - "Nikmati Perjalanan, Kami Siap Antar" Mencerminkan positioning
            TANAMS RENT sebagai mitra perjalanan pelanggan dengan menyediakan
            armada dan supir profesional. - "Rent Car for Your Trip" Tagline
            bernuansa internasional yang memposisikan TANAMS RENT sebagai jasa
            penyewaan mobil modern dan profesional. Positioning: - Penyedia jasa
            sewa mobil terbesar di area bandara untuk memudahkan perjalanan
            bisnis atau liburan pelanggan. - Pelayanan sewa mobil eksekutif
            terbaik di area bandara dengan armada mewah dan supir profesional. -
            Solusi transportasi bandara terlengkap dengan jenis armada mobil
            yang beragam. - Mitra penyewaan mobil bandara dengan proses cepat,
            aman, dan layanan antar-jemput gratis.
            {/* ... (Tambahkan penjelasan lebih lanjut sesuai kebutuhan) */}
          </Text>
        </View>

        {/* Navigation buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Items')}>
            <Text style={styles.buttonText}>Items</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Tanams')}>
            <Text style={styles.buttonText}>TANAMS RENT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// // Define the type for the navigator parameters
// type RootStackParamList = {
//   Home: undefined;
//   Items: undefined;
//   Tanams: undefined;
//   Mobil1: undefined;
//   Mobil2: undefined;
//   Mobil3: undefined;
//   DailyRental: undefined;
//   WeeklyRental: undefined;
//   MonthlyRental: undefined;
//   Invoice: {rentalId: string};
// };

type InvoiceScreenProps = {
  route: RouteProp<RootStackParamList, 'Invoice'>;
};

const InvoiceScreen: React.FC<InvoiceScreenProps> = ({route}) => {
  const {
    fullName,
    address,
    email,
    bankAccountNumber,
    bankName,
    accountHolderName,
    fromDate,
    toDate,
    selectedBank,
    banks,
  } = route.params;

  return (
    <View>
      <Text>Invoice Screen</Text>
      <Text>Full Name: {fullName}</Text>
      <Text>Address: {address}</Text>
      <Text>Email: {email}</Text>
      <Text>Bank Account Number: {bankAccountNumber}</Text>
      <Text>Bank Name: {selectedBank || bankName}</Text>
      <Text>Account Holder Name: {accountHolderName}</Text>
      <Text>From Date: {fromDate}</Text>
      <Text>To Date: {toDate}</Text>
      <Text>Banks: {banks}</Text>
      {/* Display other relevant data here */}
    </View>
  );
};

const Stack = createStackNavigator();
// Create the stack navigator
// const Stack = createStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Home: undefined;
  Items: undefined;
  Mobil1: undefined;
  Mobil2: undefined;
  Mobil3: undefined;
  Tanams: undefined;
  DailyRental: undefined;
  WeeklyRental: undefined;
  MonthlyRental: undefined;
  Invoice: {
    fullName: string;
    address: string;
    email: string;
    bankAccountNumber: string;
    bankName: string;
    accountHolderName: string;
    fromDate: string;
    toDate: string;
    selectedBank: string;
    banks: string[];
  };
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Items" component={SecondScreen} />
        <Stack.Screen name="Mobil1" component={ThirdScreen} />
        <Stack.Screen name="Mobil2" component={FourthScreen} />
        <Stack.Screen name="Mobil3" component={FifthScreen} />
        <Stack.Screen name="Tanams" component={SixScreen} />
        <Stack.Screen name="DailyRental" component={DailyRentalScreen} />
        <Stack.Screen name="WeeklyRental" component={WeeklyRentalScreen} />
        <Stack.Screen name="MonthlyRental" component={MonthlyRentalScreen} />
        <Stack.Screen name="Invoice" component={InvoiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },

  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image2: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  text2: {
    fontSize: 18,
    marginBottom: 20,
  },
  text3: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10,
    marginBottom: 20,
    marginStart: 65,
    marginEnd: 56,
  },
  button2: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 40,
  },
  buttonText2: {
    color: 'white',
    fontSize: 16,
  },
  // Add the iconButton style
  iconButton1: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 70,
    marginRight: 260,
  },
  // Add the iconButton style
  iconButton2: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 20,
    marginTop: -60,
    marginBottom: 20,
  },
  // Add the iconButton style
  iconButton3: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 20,
    marginLeft: 260,
    marginTop: -60,
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8, // Adjust the spacing based on your design
  },

  educationContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f0f0f0', // Ganti dengan warna latar yang diinginkan
    borderRadius: 10,
  },
  educationHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  educationText: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'justify',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  iconButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 20,
    flex: 1, // Menyesuaikan agar tombol dapat rata penuh
    marginHorizontal: 10,
  },

  rentalOptionsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  rentalOptionButton: {
    backgroundColor: 'orange',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 20,
  },
  rentalOptionText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },

  formContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  // datePicker: {
  //   width: '100%',
  //   marginBottom: 15,
  //   textColor: 'black',
  //   backgroundColor: 'white',
  // },
  container3: {
    padding: 16,
  },
  label2: {
    fontSize: 16,
    marginBottom: 8,
    width: 320,
  },
  input2: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 18,
  },
  picker: {
    height: -10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
  },
});

export default App;
