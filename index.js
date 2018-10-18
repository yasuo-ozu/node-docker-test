"use strict";

const {Docker} = require('node-docker-api');

const docker = new Docker({ socketPath: "/var/run/docker.sock" });

docker.container.create({
	Image: "25fc9",
	name: "test"
})
	.then(ct => ct.start());


