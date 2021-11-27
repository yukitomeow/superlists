from selenium import webdriver
import unittest

class NewVisitorTest(unittest.TestCase):

    def setUp(self):
        self.browser = webdriver.Firefox() #everytime test run this run

    def tearDown(self):
        self.browser.quit()

    def test_canstart_a_list_and_retrive_it_later(self):
        self.browser.get('http://localhost:8000')
        self.assertIn('To-Do', self.browser.title)  #test assertion
        self.fail('Finish the test!')   #reminder finishing test
           
    if __name__ == "__main__":#このPythonファイルが「python ファイル名.py というふうに実行されているかどうか」を判定するif文です。
        unittest.main(warnings='ignore')