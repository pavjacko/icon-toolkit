import Jimp from 'jimp'
import path from 'path'
import fs from 'fs'

const iosIcons = [
['Icon-App-20x20@1x.png',20],
['Icon-App-20x20@2x.png',40],
['Icon-App-20x20@3x.png',60],
['Icon-App-29x29@1x.png',29],
['Icon-App-29x29@2x.png',58],
['Icon-App-29x29@3x.png',87],
['Icon-App-40x40@1x.png',40],
['Icon-App-40x40@2x.png',80],
['Icon-App-40x40@3x.png',120],
['Icon-App-57x57@1x.png',57],
['Icon-App-57x57@2x.png',114],
['Icon-App-60x60@1x.png',60],
['Icon-App-60x60@2x.png',120],
['Icon-App-60x60@3x.png',180],
['Icon-App-72x72@1x.png',72],
['Icon-App-72x72@2x.png',144],
['Icon-App-76x76@1x.png',76],
['Icon-App-76x76@2x.png',152],
['Icon-App-76x76@3x.png',228],
['Icon-App-83.5x83.5@2x.png',167],
['Icon-Small-50x50@1x.png',50],
['Icon-Small-50x50@2x.png',100],
['ItunesArtwork@2x.png',1024]
]

const androidIcons = [
['mipmap-hdpi/ic_launcher.png',72],
['mipmap-ldpi/ic_launcher.png',36],
['mipmap-mdpi/ic_launcher.png',48],
['mipmap-xhdpi/ic_launcher.png',96],
['mipmap-xxhdpi/ic_launcher.png',144],
['mipmap-xxxhdpi/ic_launcher.png',192]
]

class IconToolkit {
  constructor () {
    //console.log('IconToolkit 🔧 ')
  }

  generateIcons = (opts = {}) => new Promise((resolve, reject) => {
    var pios = getDefaultPathiOS(opts.destinationFolder)
    var sios = opts.source
    var fios = getDefaultPathiOS(opts.destinationFolder)
    var pand = getDefaultPathAndroid(opts.destinationFolder)
    var sand = opts.source
    var fand = getDefaultPathAndroid(opts.destinationFolder)

    if(opts.ios) {
      sios = opts.ios.source ? opts.ios.source : sios
      if(!sios) console.error('No source specified for iOS!')
      fios = opts.ios.destinationFolder ? opts.ios.destinationFolder : pios
      if(!fios) console.error('No destinationFolder specified for iOS!')
    }
    if(opts.android) {
      sand = opts.android.source ? opts.android.source : sand
      if(!sand) console.error('No source specified for Android!')
      fand = opts.android.destinationFolder ? opts.android.destinationFolder : pand
      if(!fand) console.error('No destinationFolder specified for Android!')
    }

    if(fios && sios) {
      mkdirp(fios)
      console.log('Creating Directory:', fios)
      iosIcons.forEach((v) => {
        gIcon(sios, path.join(fios, v[0]), v[1], resolve, reject)
      })
      copyFileSync(path.join(__dirname, '../assets/Contents.json'), path.join(fios, 'Contents.json'))
    }
    if(fand && sand) {
      mkdirp(fand)
      console.log('Creating Directory:', fand)
      androidIcons.forEach((v) => {
        gIcon(sand, path.join(fand, v[0]), v[1], resolve, reject)
      })
    }
  })
}

const successHandler = (v) => {
  //console.log('SUCCESS!', v)
  //TODO
}

const getDefaultPathiOS = (p) => {
  if(!p) return null

  return path.join(p, 'ios/AppIcon.appiconset')
}

const getDefaultPathAndroid = (p) => {
  if(!p) return null

  return path.join(p, 'android')
}

const mkdirp = (dir) => {
  var sep = '/'

  var segments = dir.split(sep)
  var current = ''
  var i = 0

  while (i < segments.length) {
    current = current + sep + segments[i]
    try {
      fs.statSync(current)
    } catch (e) {
      fs.mkdirSync(current)
    }

    i++
  }
}

const gIcon = (source, dest, size, s, e) => {
  Jimp.read(source).then(function (lenna) {
    lenna.resize(size, size)
         .quality(60)
         //.greyscale()
         .write(dest, s)


  }).catch(function (err) {
    e(err)
  })
}

const copyFileSync = (source, target) => {
  var targetFile = target

  // console.log('Copy assets from: %s to %s', source, target)

    // if target is a directory a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source))
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source))
}

export default new IconToolkit()
