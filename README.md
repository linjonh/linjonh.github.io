# 项目目前托管着《掘金小册》
[网站地址](http://codelin.vip/)
# 配置 hugo.toml 放置在主项目里，放在cofnig/_default/hugo.toml里发现会有问题，编译不出文档了。
> 谷歌统计id需要替换

# 谷歌广告ads.txt放在主项目的static目录

# content的目录必需包含about, [content/js/_index.md](content/js/_index.md)文件，因为此文件生成的PWA 的Service-worker用到此生成的swconf.js配置，注册了许多缓存目录配置
> 缓存配置需要在pwa的配置里添加正确的路径，否则会注册失败。

# 模板替换：
> head_custom.html 修改一些head 的脚本，如广告，统计等。

# 待解决问题：
- 搜索栏很卡
- 评论系统需要修改平台
- permalink的规则，会导致解析的文章数量偏少。目前的content的结构是posts = "/posts/:sections/:slug/"可以解析多个。

# SEO优化配置，设置描述，图片，会在head生成og:的Meta标签
