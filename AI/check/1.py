from selenium import webdriver
from time import sleep
import execjs

username = "***"
password = '**'
print (username)
br=webdriver.Chrome()
br.implicitly_wait(5)
br.get('http://om.tencent.com/attendances/check_out/9613458?have_checked_out=true')
br.find_element_by_css_selector("#username").send_keys(username)
br.find_element_by_css_selector("#password_input").send_keys(password)
br.find_element_by_css_selector("#login_button").click()
sleep(5)
br.find_element_by_css_selector('#checkout_btn').click()
sleep(5)
br.find_element_by_css_selector('#tdialog-buttonwrap > a.btn.btn-primary > span').click()
