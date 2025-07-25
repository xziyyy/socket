const major = parseInt(process.versions.node.split('.')[0], 10)
if (major < 20) {
console.error(`nodejs must v20, you cannot run this script, and run again`)
process.exit(1)
}
