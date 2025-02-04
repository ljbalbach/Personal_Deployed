'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "06a6666151b74deb567fe781dde77ad8",
"index.html": "fda8af8aca988c5e3d00fd9a181b05ec",
"/": "fda8af8aca988c5e3d00fd9a181b05ec",
"main.dart.js": "7d0cb14ff63c4adee05315675f94f4d4",
"LJB.png": "c6a51f424de37d4cac44073bb0ae5a22",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8143e0e764353997b00f763973053123",
".git/config": "af458a08d333a4048a2dcca2e4cd37fb",
".git/objects/61/0ce016d3a9a2f28c7c8ed2e124a6c0debb059c": "443233da7c250bc28afbb79e1dc96ed7",
".git/objects/92/a194818d9d7ccc12e93559a8ce408e20b9a702": "9f1b732fc13827901a5b11ec05d219e5",
".git/objects/92/e5edbbdcd64af4716e88f063d638b69a0e4729": "3c6b933c62b5a2504bf3bfd192930862",
".git/objects/0c/3de6b940c1c44b02a8772e9e187aaf7a7751db": "c550df3422955a922025b4315f4d029d",
".git/objects/66/c3f8724012da730cc17fb6e7764bd86d9996d7": "bc0d22f528ab3f6c18f8223e40e3a3cb",
".git/objects/50/325103bc8fa9f0529fe441cbeaff34cf4f20fd": "c6218de56774b46044e56d3e2adc6bbb",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/027758f3c54da594116c72a0d4535987c5f236": "d4de74fe205af2f44738f110d4ce8fb1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/3655d33fd1e452f3e2268fc489597959c5afa4": "0ac96356fa434bb01296e814c94d690f",
".git/objects/9b/4d41ed0b09ce2948398136c9664a188f4fe5c4": "f730ba51631dd65f7ab513b611e85d9c",
".git/objects/9b/1896ea7ee5e6febeac3b8db960bbfeff2f8493": "f44506e752a7395b856ad5ffe0a677a1",
".git/objects/6a/bca56e12c1bdf50b110a56856872ada53b7180": "6cf6d0df004a250744184beeed46e42c",
".git/objects/32/59df0e3d2305dba60e8dd57138e22ac67e6f9d": "938fb439a7b2fa411a4c24241dc97487",
".git/objects/69/7720afadf9c9616448b738031d5918ffede58c": "573da9613e92f5a4bb0ff84d501df36a",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3c/f2812a2900c06aced4d239c69a4865085e67db": "c563339826cd2a500901de5835019648",
".git/objects/3c/8ab399a38947ff2a060c206cd76a0bd048b66e": "7d60cab27aa21e8107bfd6b6d1fbf521",
".git/objects/56/3cdb0cdb7a19622ad6084ea04bcfa19af5ea97": "52dfc5fe0cd7483fb057d77f974ff6a1",
".git/objects/3d/df0f367ea97d252fa5a2c45403de07c2e8bdc0": "8245e2149a17a14531a68eb73f861b39",
".git/objects/3d/21dd432c8157f7163670654067745b48f56bc9": "02142feb092597b283cb0e1748b9d638",
".git/objects/58/ed47e858508fd8014e3c940440a3f86c4abf1d": "1a4a25b38f1db1595de1294ff315ebc4",
".git/objects/67/69224172d3f9a3f3f1f3f9758f7d8bb1bffa94": "c4ae4ce5f111745b277e13aac48a901a",
".git/objects/67/5b5438d32638c7284c0968ca69d40467858e94": "0668120fb21e2aca664267370f84fcbc",
".git/objects/94/c52a55c563c6cc4e25526091312120dc35be19": "9c95d591d9ea00d27640edd894bd29ef",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/5f/b01a7a44a135e50b63f2dc4f199e4704d045cd": "e346e53a3ce7850831c92a8f9910df8e",
".git/objects/33/381f548eb463ed4a224329af5917977345394f": "9352d0f4fe05047916cf43f1eefcdb1e",
".git/objects/05/4e21d1bfbbd1fd397e0241e4fcc60813736f28": "4f1c39b0bbc18179ff96c7330be64ccb",
".git/objects/02/67045fb63fef75ebdb35b7a33d1a7889016915": "73b2c28cd06e72bfddb31f62473b0881",
".git/objects/02/e5bff34d3a0a881b5a7403a5822f0a07e48cf5": "2d6b8462dd1093df57a6fe6f9d7fce62",
".git/objects/02/93df51bca7039de38c540a795c7a06acd44854": "36dd69759fdf960ac334b136e8a02e35",
".git/objects/a3/abbb31f154ca4f0ba2b4bb0d48ce5af62416a6": "ee7e728c8915da83ca55656e199bd797",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b2/5cdf7ad5b97f6af8f09deb13584977adb42b7b": "137852f698c646d23d82ebc0d58ff7bb",
".git/objects/b2/a8a1d470471c44a4238d7c1c7c941390be8bf5": "0bae1c4ba4214c64353071311fba5a98",
".git/objects/ad/bb555feb619d5f7fc5304926fb796ea4a7c6d9": "e5e83904b0ad02b31920f86ef33aecc0",
".git/objects/ad/ae6b1f5fea3fe4b1a72ac4823bfaef7232553c": "fec655ce46c638013f85c306830bfc26",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/2006cc609f985eab9cac2ed74a09c9382136d6": "6db4850e5821e5be2947f11c245dcad7",
".git/objects/d0/9b390877a2206e7fa129fa11c191690761ca2d": "a9031f7ecb27ae0cf06e6a4f280a3eb6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a2/7831ec7c7e058294a1e0efaa6b56e29c86b0bf": "96943b7630ac55a1d166fb15e1b06cc3",
".git/objects/a5/065c9c5a82d2f3d5c701618ac113e91e3872d1": "134ecf788cbf0828b8e03efdc2b8c4ec",
".git/objects/bd/e11632d8a56b7bbc8dd69ff3f7f682951c0cf7": "83533c1398dec5732e5bddf48db92504",
".git/objects/d1/816586eb84f6cc1b139c0f47eecdbcc6222223": "58d3db4deee7b2f981f1894756dd6a8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/8989529611425deb54602218b271fdf9dfffa1": "d5bcbce0c398ac188e419feb94fd19ea",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/3ee5fa7393ec422ed0dace08ac59c64dc27fbc": "e8dea598f8cdcc2409e802d86e6415e8",
".git/objects/e5/d36545d89662f2d513420fea34458791ab9678": "fdb8914af833857ebfdc70c8b0cf2da4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/5d3f4acd1712c28b538b68400c3feb2f47cab5": "d720b1a6be4e416e5e1dc97d9d665941",
".git/objects/e2/f7645cce2b5e6fb61b79c352aed9f3ca684a82": "65c05a5ebd7aaacad5df9cfab0f6518b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/68766e18d1d052129be7cf8273a43ed3d079d0": "1065c335bbf99ded075af97ab1e06dfd",
".git/objects/ee/fffcaf88de13080ea344fe0bcf31009b7bc4c2": "7daed5eef5a58cb23ad7fce518de56dc",
".git/objects/c9/a27820c926959eba5956838456f90c299cf41e": "f0029cf6ebc57ded97a4206bcdc4a889",
".git/objects/c9/502a6c5dd16e453b19fec0ccae00fa9b61f88d": "d1763b793439c416514dca2917aaefda",
".git/objects/fc/718fd7466a651353912f5bcc15fbc7c379163a": "a60f8a74b1a0f543783968282ed2fdbb",
".git/objects/fd/a60a89f39cb75dd6b45d55515613cd1ab07db2": "9b32f3962a99e61e8268e3e035b8d234",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/9f170b14cf04510cec1cd9c3e492ddd9dbc934": "17b46cbb9637cba6ef7d41ebacc33961",
".git/objects/f5/2c700eed3260d2b84d08ad1762b9907b771201": "508728054eee98220c6696f16e797a60",
".git/objects/e3/01d424e4f03adead670994e3d86589ad1ba0d6": "27b459e059bcf810b5afccf27545c3e9",
".git/objects/e3/69653c9e34a616fbd565ab7d82e4b1f98dacb2": "0372cee8a737f7ccb98fbe62ae01820e",
".git/objects/cf/94cf8a9ca46de99704fcae081fb944abb7cdb3": "3a23faae339636390a53df975bd1db96",
".git/objects/cf/4b383975efd332bf85b1900681d1add7acdbc3": "8be3cefd443eb51b5c64e678c3ae36a4",
".git/objects/ca/49a3bcd66a5ea01b632ab483ffd9b984e724c3": "59cccfc48ee8d4b32b2d62820758d433",
".git/objects/fe/c8e91ca7b505847e4cc776df9c146a3b4d6122": "edf68d155520bd011fc5f9b700e3dbc0",
".git/objects/fe/15b2fb05bc88fd6a8b4fe7c3ede2557ab99233": "aabf2c695c1e11a97a51754180c10d50",
".git/objects/c8/4ff2aacb1905070ab3af3e1a14f96276d4a7aa": "c05344ce5f9725ea6dafa7eb33a23ce9",
".git/objects/fb/1a6ea24ee0d63defb398163cd9f1a325cf9434": "100b0aa41b36631274a4aeb4d56d5e88",
".git/objects/ed/8a7edf48a243390b68e9b13ec20419f69994bb": "0794ebf530442c7b41ab5157a4fdfc8b",
".git/objects/c1/a3eeb7edbc69b28178c55fcbfb01a223e4564e": "5e61b3074a51112b153a92ebac781870",
".git/objects/c6/a5da2ce0cf388395265d9e61f8d6841fb1e732": "2860e33599aa4709f5948719278d3b8c",
".git/objects/4e/5e174e93e43539ef3f7bb8c6fe2d480f53c71a": "e13f7c45140f0cde6ef4f808da4b4e40",
".git/objects/4e/2bad432480fd4fe311a337e72c5093499886d0": "da18b9191b6e42b92a80c61e2c32a0db",
".git/objects/4e/df68ca453a4b06301e32668d017cf812eceff1": "f7c6162f0ff9439ee21c0bc6801d8d4a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/d5403991093c289cdb48aff28d367c1680ec8e": "a9ab32694128d28846ee8ddaf6fbb4a0",
".git/objects/18/b9161beca00538c4caa8b5f230a184ba55691b": "961b9b18b3aaad15b9b39a1a38e2d2ca",
".git/objects/27/0275c4121f6aaaa8af8c2dfeda9b7c10c6ded0": "029ccaaa7598c92f61393645bc24ff85",
".git/objects/29/374479e28d7c2ae5e95da5da939924dc76a387": "bf092c51cfcd89c49c7417e4bc8ae859",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/89/30b04c35dd63a9fca38d48baaf4ec14447c22d": "a6993a4e66fceff8930de0c009a631f3",
".git/objects/89/a2ed78193a920246d6047566a90e753a469157": "27c74fb72fc98bb74272df91d7e28107",
".git/objects/89/ba58fab9c5ffdb456f5979971a38c19cdd1e08": "dd8e0f50cfe8afd8bc83591f4d2e5dbe",
".git/objects/87/d611cec2f3909c3639d3a87b380ffe42cb1a8b": "764b593b72880e9133ee982bb419358a",
".git/objects/74/7867a3a0f3c4a84e27e71ec4834a17df60e68b": "f2c5453b7db71306bdd67146af05da77",
".git/objects/1a/53bcd29d77cc4f8caa9f52734286ca41f22138": "ecdcc9d65479be57b9740af2cfae37c5",
".git/objects/1a/30e250e76f5de2674a54a2261496f70e644fa8": "9e0e2fe08f1b994f65d69c529f1b163b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/ed9932d722aff8ee95c2ed326305aca400ca25": "503ecd1f9413fbd5ff95d2d47fa89194",
".git/objects/10/86a42bb707db17539823ff15d6a719c7eb5701": "f8dd388b91256058e0e1f6b43a236cb1",
".git/objects/19/efbedc619a179744b6042c2119cda0dc0ab884": "74e38947f3e61fbc1166a2b9777de62b",
".git/objects/4c/ba68911e3742981721016f157438edbea1953d": "beb73f5247e8c2ad8c28b85fbe1b5e41",
".git/objects/75/406c7e37b68b8ed6adb6a612aa4bd2dcb1d19c": "ac4dc54be9a99fd37496503ae686d671",
".git/objects/75/7c0d2d4c84e5b153b7f8ce3cc41bd8664e7e70": "5f3d74c56ce83ac700d5d7a3183e83a4",
".git/objects/75/e8c86ac9ec55768d1ccaaa30b4fd3b4764b20e": "f8ca8c9ee980d31e5d121a7e86576bca",
".git/objects/81/82166bdbe7130f2c90e00d8eeb8727df453a7f": "68009d89b896d929c714114160a27cbe",
".git/objects/81/5ea662adabfcdc58840b77ab343cf251c098ee": "dd737215684752c7b9db3e85863ce1a2",
".git/objects/44/4f2a8fa37e504ed93069f068c671950b3ef350": "8775c8a0825c95f21cfa7a38738ca8e4",
".git/objects/88/49ccba60313e4139e0b93833954afc70f1bda8": "7da7160f75d2cd077115b74703fb7d31",
".git/objects/88/32ffbe849df24da292e760e6d4d1fa42639ea0": "8aac6ceb91c33b9f65470a7ed06b5ee4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/b123ec5b65a6db47c596aa5af5d30bd75e865c": "c2c3135953e0a20d2e6a8a192caed071",
".git/objects/9f/a7162132626456b2f7ecd6befdbfd071e9cbc4": "802ee520a30e8c7337345b578d11e15d",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/38/53b263455a0be2828061da24f0968ca38148d4": "76f86d41213e9d6d8bb827bcf96c430d",
".git/objects/38/c197795228942cc5914a3d4de5b1bbf6dbe56c": "545cf52532812d3b947403e0d721e269",
".git/objects/9a/3abcdced49a075cb4d71de341251c0d51ff83e": "a70843ebc5058aa6639d1811102b0ac2",
".git/objects/36/03fb65ccc752eab4df4b4f0c1a3d0db298a689": "7ff45c80f43e1a821791e0edb82ccf76",
".git/objects/09/401ee539347d96d85cb8b87220c659adc82c46": "c3683b3e2b5c1eb8e8fe6c1db7d8e9ef",
".git/objects/09/2556ad1b754b754ff484fef5f350e6dec2e544": "aefae4bce3e94e6033c7bc7d033fbff5",
".git/objects/5d/e634fbf8fef078e13fd827ebdbdbc1e98b93a3": "c3296ac466265fe64436b7a9d9e7a01e",
".git/objects/91/8c2ef9742f9021201ee273c15f80aa473513fd": "e4604ea4f3a7d6640dfdec2383ece729",
".git/objects/65/f64bfe42f9a25e8cdb78a005aec0573b5d131d": "649a9aac383ab44a74fbc36a59f779f6",
".git/objects/62/26bf22157d67b842cf86cc20a3bb88109d4d71": "b2f99c31b9ee843ac5057c00b611118d",
".git/objects/53/b0c3554944d97edd54c1f84a25e8347b9d5172": "ca2a2113571fa2cbfd446b02875bc27d",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/8632215e857f4de1b889b6b7d4f40ad161cb0a": "a8a4c22714abc72a2e0160567dd56ceb",
".git/objects/30/eb56ff526e91724cd297ec1912c885cbb6bc35": "5a7d563c0531e90e6383b6aa2e93a301",
".git/objects/5b/03bf153f878b2b7d7f56ae4da4342abc696608": "c024754d37e9ef2cba5563e63b525442",
".git/objects/5b/9e4c51d96e827f5a4fe3db1e34576adcf248c2": "0e517cd1fd4e5060b738fb07271fd4a5",
".git/objects/37/fa923df33faeccc4b55228046b5b079a82926d": "3990f93a84c6ff14191bc24dfec7a53c",
".git/objects/6d/edcc23777c4e941d45006c17c2dcb5e9e630f9": "f37ac74cbd7bcdd68917874ecd676a45",
".git/objects/6d/8cfb731e76d36d0aa41cbf26d9d10fd587fdac": "2dc579d6429b079c45cb596d32d29106",
".git/objects/01/6b09a87936407cd6894ddf31d9937a8947a42d": "a3f7d84f99e386e75a13c3c76d1545df",
".git/objects/06/e32b1029b6700d6a01ab9cdb20a1dbcc9f805c": "59fdbbccd98fc350cd0b6ddd7d4e936e",
".git/objects/6c/9ca970d89ac281bbe3dc88568b2fa5ac6b7ef5": "7cef10345d8c61d9fb7a43cf30e26884",
".git/objects/6c/b3b705d018006a2bd4200ea94c9d5fb98b6f76": "3f0f65921839b32e52dee427e6222ebf",
".git/objects/39/d44f2a6428ba44a0078d5a91fd3b894d0fde0d": "f08e8cc0025a15969da4a9a3dd7913ad",
".git/objects/bf/9422491f89d225db81bb68550c3f9a1daf278b": "0ae2d1cf411277bfc9ff655cd0e26619",
".git/objects/d3/f28440cbed96c03866a3b918640c9b4d0a82d1": "22849fc58ad79b23bee37627b62c5344",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/18e5ecb1680d8e7bdb1a46d69ab85581036ca1": "8cd23fe70401286e9ea26a614791575e",
".git/objects/b1/16a8dd979e3a9c9cf7665669ecd30473767847": "af5b2f4fc99f9bb501aa31d0b2380596",
".git/objects/dc/c8dce74ec64413a6d25e83de62da8216c60a05": "731c588ee1a0b4dc60c2e1c0c7fe06ef",
".git/objects/dc/670c042f071566ad261da791591809674e3099": "ee2c4ac9cb13448c6c81c6bb9eea2f2c",
".git/objects/b6/aad70103cd72c8c4bba268d4c4e8a51f7807aa": "7bb9bf982852c5c8726330e82f2cdc37",
".git/objects/d5/508e598643dc7a4c1fc28bc98a1e3a26feb6ab": "83bf5b6782404451b1940fb3789f4b2d",
".git/objects/d5/488e58df2cf4ee905b009ab453ff5706d87393": "1920829210b3985ed8bf16b83fe6afe5",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/f31ddbf354d28423bda3c38d4bafc040c53b46": "70de22d114b3c23c78182c4fa10f23f8",
".git/objects/a8/acc79e038e692c3e7ff2edbd3c27eb05fc4d10": "c1e36ca9dba539f8e5f7fcaf7f490ca1",
".git/objects/de/ab5184aebd978c9ced4e5391da64a53adefab1": "fbc3ff4b51496392f4608c4e2c25fd08",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/d242632baf049aff7b4610bfc8b949a96c857b": "e336bc9792c9ea778270db0fada26bb4",
".git/objects/b9/cdbe9aa468ef183722cff20b4b784fbe52b8bc": "76ec0f60750fb39b715da195a2fa3909",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/9077964a85db84c1d0adc6d0965114584a0222": "e73fc588f49f6445c50e7f04265e72a0",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f7/cf4737a49b212014866539d97cee6947184fcc": "804ae23c57fa8fa369d4d3ca113c26ba",
".git/objects/f7/092517d45fd42780ca37e87a92f412bdab0eb2": "c1acbf7b733727c51399f2006617a128",
".git/objects/f7/571b35421099e33add6073bbbe7a6d10c83072": "156e1baa06d2bb6ab2ec2bd493cc05a8",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/71edc9131f27962e5d9a788b7cc89aad2b7056": "222141d25d7bc18b9f2b84c1255e79a2",
".git/objects/e8/b6eb2d8edc070d05e05748da4a8fdbc199ce63": "0d0f4a135aedf991c7010a7687d51ef5",
".git/objects/fa/f29f7a686b0c6a21a771f01d9330a53d7cca02": "64afd9dd4963d7c2c8cc7d46200991a2",
".git/objects/c5/dfae26764ca15b3f64ff31ec737d35b0853857": "de4fc6b91019fb80627b885145419ae9",
".git/objects/c5/ac7204ac93e20b2f87482d43939241d45f47a1": "b3723f52f8f03c4908e578793dbe4538",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c2/ed895b429a1d7ae23780b6c7477d92fe2000c8": "476ba45cdb678372249f407b5da3a704",
".git/objects/f6/780c174ad38cc308beb8482c46f01e31ebab5e": "0d1eaec61ccd3dcf76906602d10a5edb",
".git/objects/f6/d36dce61f35e4f570d748687414c5847c4291b": "d5efd2cef227dfa0a02916ba043ac936",
".git/objects/f1/e2624142269928fafa8f888a7d3e298fa1fe40": "ad8decf2f7c374885bd6a69d58a0bc67",
".git/objects/e7/b4051588a3cd07f20132d33699324f1dbc748a": "1856db3188d6be4fcb7b05efb7e139b2",
".git/objects/e7/4167272a4eb2260242fbd4085c1ab569cb1a50": "c648087276893b1a2e18580ac17b3206",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/b3dcaed8ccdb75e0d439e9414e250f9a76743c": "a11ea4d84c1a5602d79ddf619d08c35b",
".git/objects/79/5852db40b19097fa97aed40fabdbc111231341": "5abf81c7d4548c4b94b5d339050656e6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1b/efbf45ad47d45635f7e36a6703a0a2608f2fd8": "fb29b2b3b4354d03e8421c31c6f89630",
".git/objects/48/5ebaf750252ed4742b99e4dec90412bda1ff7d": "c36a8bffd23ff4f1322dda417338b869",
".git/objects/70/7069a67535f557e1e16fc42e0b7e6e7b69c67b": "2c8dfd9407684d789d0c6230a45e031a",
".git/objects/1e/49c9312c4734b07f811381d48c9c964e2ca69d": "a56ddd338af5c2b90ad273f692c93a03",
".git/objects/84/79106dc6674982b0d3af9f673fa2eb787c6414": "d11d706698d2160e492c08ccc6893783",
".git/objects/4a/cddb302b7d5dce730095fdedcfc14175481e1e": "738c8eafa4d6d1c42a2fcfee1db8abdf",
".git/objects/4a/bf37b1b8f54493f8d85879e6de66487e134f7d": "c279f44e4459290819474b8dbfd92901",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/517a6cf49c1621efb3365665fe2af495cdad95": "abdb3792f97a0042870137276d99353e",
".git/objects/23/0a7fd8e468a0d4e729b20433fba7fcbb2388cd": "65c6c6c445b408a578ac056d821b5372",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/5bddbead8bf6c2eed241961bc3bdaf571462ac": "e09be5dc573ea46d0f899a5e296af977",
".git/objects/1d/8455a5367dafb10f74985b274fd09039c13f14": "c395c62556408fbe77f02e0f25a56f5a",
".git/objects/71/e92405435c0d00c2dd9e1162af43b83c0ab10b": "82c1f749bc72c4c267040abb54c7b5c3",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/1c/57cb0f8af6bbc38b3b6e4d2c8390fb245e0e4b": "5c816e2529ae4c655b6671a6854e0271",
".git/objects/49/350eea403ec03765f9c1c4f482b2642a5269be": "5135e48fd52fb0c35c1421c06e6ca8b8",
".git/objects/49/fc4e7449740ff9beaf17b46223d368de5824bd": "81e0f693d06e9c2df08c61dc55aa1b96",
".git/objects/2e/9f95e8997d0b6bcd35d4699d5389c1b2c63ab8": "7c1610a37f31b2307d7614bfdce828bb",
".git/objects/2b/bc0ec2397f1b429e292d30679928d7ed8c3e83": "70d0cf75aa1a5996a1a4b6a7d9cf616d",
".git/objects/47/d9d5ba8f022d5498bfda985a669b3c32fa64e4": "79f3fdb33a373dcde114e073c58c14cf",
".git/objects/47/5fc5223e98983d8a26e1c33806d1cbda2a64b9": "dd38fe8416cee31142d7207113afa224",
".git/objects/7a/ea8d465957374721559a9019af0082b6b81de1": "210a40d490ecea26137194533f0b68cb",
".git/objects/7a/1c5a2b8d6ee0f5db8de2c54c99f6737cf0f208": "b027f50c2889ab27d71c5ae4f14441c7",
".git/objects/8e/4ee9a51354b4c8875d0aa5dae6a5c8bc645d7f": "4c0e3c44f9f4368c128d7aeac051f8c9",
".git/objects/25/44ed8f104a010876b4e6e37b926d6f730a9f4a": "bdf2e7419bc518cae92aff4181f5e104",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "850fd86c12152a50750ff85c8e1d95b9",
".git/logs/refs/heads/main": "5010a7f648b802b53671bb9b309fd58f",
".git/logs/refs/remotes/origin/main": "a0326516f81456a1b1a1ab8e179a61fd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2e5c00be8abffee2aa9dbfa9d876b27b",
".git/refs/remotes/origin/main": "2e5c00be8abffee2aa9dbfa9d876b27b",
".git/index": "d42e871909e29b15c087d9317cf54373",
".git/COMMIT_EDITMSG": "a0e072fd9615ce89877b56cf1073a630",
"assets/projects/high_quality/image1.jpeg": "1cfdb190d4fa72b0e88ba964258438c0",
"assets/projects/high_quality/image2.jpeg": "2b2d4c78e88f53f6160f8919cf325dcf",
"assets/projects/image1.jpeg": "204ed086ca6c482d2af13c5c2b24bc53",
"assets/projects/image2.jpeg": "12d128d43fb42572d5e62b50c7eb0ac7",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/logos/coachmeplus.png": "98ad446078d38ca6c30fef9ef518197e",
"assets/logos/calspan_black.png": "eb13bd609e0c0e753cbaebecf6accfd0",
"assets/logos/github.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/logos/visa.png": "d228a94fb9804f22a254cd268f201147",
"assets/logos/linkedin.png": "f172eba75e66d85e7757b2bd7ad8af9e",
"assets/logos/calspan_white.png": "5e71de581ca900a7457c91b072eae3ca",
"assets/NOTICES": "66fc61c8c90e619d64a7e26af3f11ab9",
"assets/backgrounds/winter.png": "2407b57ac756cf97ff54d1cee48eb2b0",
"assets/backgrounds/summer.jpeg": "e39a1c63b114e8e7fce60e67fb5c8b37",
"assets/backgrounds/final_seasons.png": "a5dbb3b1930ff45ebd5636c5dfc9db73",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/photos/high_quality/image1.jpeg": "6fea1c2509b95e2a931e903af2c418f9",
"assets/photos/high_quality/image6.jpeg": "d0fadd69b5bdf3e371049f4ebc51d428",
"assets/photos/high_quality/image7.jpeg": "f8a6f3e78e0b0e110b213e1db4bd9270",
"assets/photos/high_quality/image10.jpeg": "9e3782ce3dc88140aadd493760de213e",
"assets/photos/high_quality/image8.jpeg": "fd24ceaceb5efb8e534c2880f9ea452d",
"assets/photos/high_quality/image4.jpeg": "9df095985bad5f13df9d05e39fb97afd",
"assets/photos/high_quality/image5.jpeg": "88babaf5f55a2d7a63649e876f3e9ec2",
"assets/photos/high_quality/image9.jpeg": "7987514f7dfccce94d7b0f6ab5ebb0c0",
"assets/photos/high_quality/image2.jpeg": "35368d8aab887b41673803356fe57f97",
"assets/photos/high_quality/image3.jpeg": "486d1edecb0a5212ba53022a7135d558",
"assets/photos/image1.jpeg": "ab8cbcc37cbd7143c811d85d93227127",
"assets/photos/image6.jpeg": "61b59993f8bfbf905106d51e18a7cd05",
"assets/photos/image7.jpeg": "85235d43f4d49a085a8e05962ecafbe5",
"assets/photos/image10.jpeg": "c409e83c61adca26ffcb4e7cb6847ddb",
"assets/photos/image8.jpeg": "fdf3cec8e241beefd67ee2a6a6147abd",
"assets/photos/image4.jpeg": "935f00e7aaf3df65b3a906b78c5ed88a",
"assets/photos/image5.jpeg": "2fd909b9d9df6fc8adeed1b8f405fd2d",
"assets/photos/image9.jpeg": "ebe8700e0dfd9e8be21828f75ada8485",
"assets/photos/image2.jpeg": "5c6506b36b18aceb9393256d5976d687",
"assets/photos/image3.jpeg": "1599da923ec25a3490ef53940ea9e3d7",
"assets/fonts/MaterialIcons-Regular.otf": "f03aabaac32268d4da43039fd13712b1",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
