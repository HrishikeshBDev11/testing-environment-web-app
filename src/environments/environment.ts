export const environment = {
  screenHeight: 0,
  screenWidth: 0,
  httpProtocol: 'http',
  ipAddress: 'localhost',
  // ipAddress: '59.97.236.175',
  printFilePathIP: 'localhost',
  // printFilePathIP: '192.168.3.252',
  port: '83',
  hospitalSection: getHospitalSectionAfterRefresh(),
  currentUsingPlatform: getPlatformIdentification(),
  navigatedScreenName: '',
  hospitalName:'',
  accessablePlatforms: [
    'windows',
    'andriod',
    'iphone',
    'ipad',
    'mac'
  ]
}


function getPlatformIdentification() {
  return window.navigator.platform || '';
}

function getHospitalSectionAfterRefresh() {
  if (history.state) {
    return history.state.hospitalSection || ''
  } else {
    return ''
  }
}
