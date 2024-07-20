((n) => {
    for (let i = 1; i <= n; i++) {
      console.log('*'.repeat(i));
    }
    console.log('------------------');
    
    for (let i = n; i > 0; i--) {
      console.log('*'.repeat(i));
    }
    console.log('------------------');
    
    for (let i = 1; i <= n; i++) {
      console.log(' '.repeat(n - i) + '*'.repeat(i));
    }
    console.log('------------------');
    
    for (let i = n; i > 0; i--) {
      console.log(' '.repeat(n - i) + '*'.repeat(i));
    }
    console.log('------------------');
    
    for (let i = 1; i <= n; i++) {
      console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
    }
    console.log('------------------');
    
    for (let i = n; i > 0; i--) {
      console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
    }
  })(5);