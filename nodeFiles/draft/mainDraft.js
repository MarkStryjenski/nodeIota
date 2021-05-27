async function run() {


    let transactions = [];
    const connectionDb = require('./connection.js');
    const {ClientBuilder} = require('@iota/client');


    // client will connect to testnet by default
    const client = new ClientBuilder()
        .node('https://chrysalis-nodes.iota.org')
        .build()

    const outputs = await client.getAddressOutputs('iota1qz4qx5xrl59wnnvswxk4mjvhjkdk25yveft3us2hgxd5tn2l6gz4vnwld2d');
    // console.log(outputs);

    for (var i = 0; i < outputs.length; i++) {

        const output = await client.getOutput(outputs[i]);
        var transactionId = output.transactionId;
        // console.log(output);

        // console.log(transactionId);
        connectionDb.selectTransactions(transactionId).then(function (rows) {
            if (rows.length == 0) {
                connectionDb.insertTransaction(transactionId);
            }
            console.log(rows);
        }).catch((err) => setImmediate(() => {
            throw err;
        }));

        // if(connectionDb.selectTransactions(transactionId)==1){
        //     check=true;
        //     console.log('insert');
        //     // connectionDb.insertTransaction(transactionId);
        // }
        // console.log(output.transactionId);
    }

    // fs = require('fs');
    //
    // let outputsArr = [];
    //
    //
    // for (const element of outputs) {
    //     const output = await client.getOutput(element);
    //     outputsArr.push(output);
    //     // output.transactionId;
    //     // transactions.push(output.transactionId);
    //     console.log(output);
    // }
    // transactions.push('fsaf');
    // transactions.push('12421');
    // transactions.push('aaaaaaa');
    // transactions.push('cccccccc');
    // transactions.push('fdddddddf');
    // transactions.push('gggggggggggg');
    //
    // require("fs").writeFile(
    //     'nodeFiles/transactions.txt',
    //     transactions.map(function (v) {
    //         console.log(v);
    //         // return v.join(',');
    //         return v;
    //     }).join('\n'),
    //     function (err) {
    //         if (err) console.log(err ? 'Error :' + err : 'ok')
    //     }
    // );
    //
    // require('fs').writeFile(
    //     'nodeFiles/outputs.txt',
    //
    //     JSON.stringify(outputsArr, null, '\t'),
    //
    //     function (err) {
    //         if (err) {
    //             console.error('Crap happens');
    //         }
    //     }
    // );
    // https://chrysalis-nodes.iota.org
}

run();