async function run() {
    const { ClientBuilder } = require('@iota/client');

    // client will connect to testnet by default
    const client = new ClientBuilder().node('https://chrysalis-nodes.iota.org').build();

    const outputs = await client.getAddressOutputs('iota1qqutpl3l6ttfecz008sgdweq8p70xdj5qtq9f4p9tt4057u4cj942xwhaqy');
    console.log(outputs);

    // iota1qp43zgz7tx4gngz87mlqqwdemsa6aj6wpd06w400devl52vkeux3y62s23x
}

run()