__author__ = 'kaka'
#coding:gbk

import web

urls = (
    "/jobinfo/(byr|ns|)/(.+)", "index"
)

class index:
    def GET(self, name, name2):
        print name
        print name2
        return "Hello,world!" + name + name2

if __name__ == "__main__":
    try:

        app = web.application(urls, globals())
        app.run()
        print('Start to Serve:......')
    except KeyboardInterrupt:
        print("finish server ...")
