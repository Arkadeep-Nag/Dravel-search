def crawl(self):
    self.startUrl = input("Enter the url: ")
    self.cropUrl = self.startUrl.lower()
    if self.cropUrl.startswith('https'):
        self.cropUrl = self.cropUrl.replace("https://", "")
        if self.cropUrl.startswith('www.'):
            self.cropUrl = self.cropUrl.replace("www.", "")
    elif self.cropUrl.startswith('http'):
        self.cropUrl = self.cropUrl.replace("http://", "")
        if self.cropUrl.startswith('www.'):
            self.cropUrl = self.cropUrl.replace("www.", "")
    if self.cropUrl.startswith('smb://'):
        self.cropUrl = self.cropUrl.replace("smb://", "")
        if self.cropUrl.startswith('www.'):
            self.cropUrl = self.cropUrl.replace("www.", "")
    if self.cropUrl.endswith('/'):
        self.cropUrl = self.cropUrl.replace("/", "")
    if self.cropUrl.endswith('/'):
        self.cropUrl = self.cropUrl.replace("/", "")
    elif self.cropUrl.endswith('#'):
        self.cropUrl = self.cropUrl.replace("#", "")
    
    return self