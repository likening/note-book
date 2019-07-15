(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{645:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_112-基于-hystrix-完成对-redis-访问的资源隔离以避免缓存服务被拖垮"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_112-基于-hystrix-完成对-redis-访问的资源隔离以避免缓存服务被拖垮","aria-hidden":"true"}},[s._v("#")]),s._v(" 112. 基于 hystrix 完成对 redis 访问的资源隔离以避免缓存服务被拖垮")]),s._v(" "),n("p",[s._v("从本章开始，用几讲的时间，给咱们的 redis 访问这一块，加上保护措施，给商品服务的访问加上限流的保护措施（这里其实已经重复了，但是角度不一样，也就是场景不一样）")]),s._v(" "),n("p",[s._v("这里会使用之前的项目，就是有 storm 缓存预热的项目，那一套里面完成了之前的课程的知识点")]),s._v(" "),n("p",[s._v("redis 这一块，全都用 hystrix 的 command 进行封装，做资源隔离，确保 redis 的访问只能在固定的线程池内的资源来进行访问，哪怕是 redis 访问的很慢，有等待和超时也不要紧，只有少量额线程资源用来访问，缓存服务不会被拖垮")]),s._v(" "),n("p",[s._v("eshop-cache 项目中，对 redis 的操作有以下几个方法")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// cn.mrcode.cachepdp.eshop.cache.service.impl.CacheServiceImpl#")]),s._v("\nsaveProductInfo2RedisCache\ngetProductInfoOfRedisCache\nsaveShopInfo2RedisCache\ngetShopInfoOfRedisCache\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("把这几个方法修改成 hystrix 调用方式")]),s._v(" "),n("p",[s._v("添加依赖："),n("code",[s._v("compile 'com.netflix.hystrix:hystrix-core: 1.5.12'")])]),s._v(" "),n("p",[s._v("上面四个方法，这里只贴出来其中一对，因为逻辑真的非常简单。")]),s._v(" "),n("p",[s._v("SaveProductInfo2RedisCommand.java")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" cn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mrcode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cachepdp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eshop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alibaba"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fastjson"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("JSONObject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("netflix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hystrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("HystrixCommand"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("netflix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hystrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("HystrixCommandGroupKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" cn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mrcode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cachepdp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eshop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ProductInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("clients"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jedis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("JedisCluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @author : zhuqiang\n * @date : 2019/6/23 15:07\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SaveProductInfo2RedisCommand")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HystrixCommand")]),n("span",{pre:!0,attrs:{class:"token generics function"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Boolean"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" JedisCluster jedisCluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" ProductInfo productInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SaveProductInfo2RedisCommand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ProductInfo productInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Setter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("withGroupKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HystrixCommandGroupKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Factory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("asKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SaveProductInfo2RedisCommand"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("productInfo "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" productInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" Boolean "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" Exception "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        String key "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"product_info_"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" productInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        jedisCluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" JSONObject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("toJSONString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("productInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" JedisCluster "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getJedisCluster")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" jedisCluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setJedisCluster")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("JedisCluster jedisCluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jedisCluster "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" jedisCluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br")])]),n("p",[s._v("调用处")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 将商品信息保存到redis中\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("saveProductInfo2RedisCache")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ProductInfo productInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//        String key = "product_info_" + productInfo.getId();')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//        jedisCluster.set(key, JSONObject.toJSONString(productInfo));")]),s._v("\n    SaveProductInfo2RedisCommand command "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SaveProductInfo2RedisCommand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("productInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setJedisCluster")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("jedisCluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("execute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("GetProductInfoOfRedisCommand.java")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" cn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mrcode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cachepdp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eshop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alibaba"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fastjson"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("JSON"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("netflix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hystrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("HystrixCommand"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("netflix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hystrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("HystrixCommandGroupKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" cn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mrcode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cachepdp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eshop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ProductInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("clients"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jedis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("JedisCluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @author : zhuqiang\n * @date : 2019/6/23 15:17\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GetProductInfoOfRedisCommand")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HystrixCommand")]),n("span",{pre:!0,attrs:{class:"token generics function"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("ProductInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" JedisCluster jedisCluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" Long productId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetProductInfoOfRedisCommand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Long productId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Setter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("withGroupKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HystrixCommandGroupKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Factory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("asKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GetProductInfoOfRedisCommand"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("productId "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" productId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" ProductInfo "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" Exception "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        String key "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"product_info_"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" productId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        String json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" jedisCluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" JSON"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseObject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ProductInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" JedisCluster "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getJedisCluster")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" jedisCluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setJedisCluster")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("JedisCluster jedisCluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jedisCluster "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" jedisCluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br")])]),n("p",[s._v("调用处")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" ProductInfo "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getProductInfoOfRedisCache")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Long productId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//        String key = "product_info_" + productId;')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//        String json = jedisCluster.get(key);")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//        return JSON.parseObject(json, ProductInfo.class);")]),s._v("\n    GetProductInfoOfRedisCommand command "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GetProductInfoOfRedisCommand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("productId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setJedisCluster")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("jedisCluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("execute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("启动项目后访问："),n("code",[s._v("http://localhost:6002/getProductInfo?productId=1")]),s._v(" 测试该方法的调用成功")]),s._v(" "),n("p",[s._v("可以看到只是把原有的逻辑放到 command 中去了，这里可以尝试使用 command 的注解，就不用这么麻烦的抽到类中了")])])},[],!1,null,null,null);t.default=e.exports}}]);