class Utils {
  binanceEOS() {
  	var config = require('config');
  	var k = config.get('binance.key');
  	var s = config.get('binance.sec');
    const binance = require('node-binance-api')().options({
	  APIKEY: k,
	  APISECRET: s,
	  useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
	  test: false // If you want to use sandbox mode where orders are simulated
	});

    return new Promise(function (resolve, reject) {
    	binance.balance((error, balances) => {
		  if ( error ) {
		  	reject(error);
		  	return;
		  }
		  resolve(balances.EOS.available);
		});
    });
	
  }
}

module.exports = Utils;