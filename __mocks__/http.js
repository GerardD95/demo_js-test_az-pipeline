const fetchData = () => {
    console.log("Data received by mocking function.");
    return Promise.resolve({title: 'delectus aut autem'});;
};

exports.fetchData = fetchData;
