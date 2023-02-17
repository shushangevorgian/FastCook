import {Text, View, Image} from 'react-native';
import {ProfileHeader} from './ProffileHeader.js';
import {ProfileStyles} from './ProfilePageStyle.js';
import {Body} from './Body.js';
const Profile = () => {
  return (
    <View style={ProfileStyles.mainView}>
      <ProfileHeader />
      <View style={ProfileStyles.mainBody}>
        <Text style={ProfileStyles.bodyTitle}>ABOUT ME</Text>
        <Body />
      </View>
    </View>
  );
};

export default Profile;
