import dns from "dns";

// Override DNS servers to use Google's public DNS, as some local ISP or network DNS servers
// refuse or fail to resolve SRV records required by MongoDB Atlas.
dns.setServers(["8.8.8.8", "8.8.4.4"]);
console.log("ℹ️ DNS Servers overridden to 8.8.8.8 and 8.8.4.4");
