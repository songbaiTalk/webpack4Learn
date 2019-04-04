const webpakc = require('webpack')
const conf = require('./webpack.conf')

webpakc(conf, (err, stats)=>{
    if(err) throw err
    // process.stdout.write(stats.toString({
    //     colors: true
    // }))
    if(stats.hasErrors()){
        console.log(chalk.red('something wrong with build'))
        process.exit(1)
    }
    console.log(chalk.cyan('Build completed'))
})