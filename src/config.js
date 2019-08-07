const config = {
    BASE_URL : 'http://api2.castles.com.ng/api',
    header: {
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json' ,            
            'Authorization': localStorage.getItem('token') !== null? `Bearer ${localStorage.getItem('token')}`: ''
        }
    }
};

export default config;