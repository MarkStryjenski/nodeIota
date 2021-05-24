async function run() {
    const { ClientBuilder } = require('@iota/client');

    // client will connect to testnet by default
    const client = new ClientBuilder()
        .node('https://chrysalis-nodes.iota.org')
        .build()

    const outputs = await client.getAddressOutputs('iota1qz4qx5xrl59wnnvswxk4mjvhjkdk25yveft3us2hgxd5tn2l6gz4vnwld2d');
    console.log(outputs);

    const output = await client.getOutput('3db5bd50759db2cd15515fbeeb955c4c1eeb38111f738d5fe7eed664ec53ccbf0100');
    console.log(output);
    // https://chrysalis-nodes.iota.org
}

run()