# TO LAUNCH DB (MYSQL)


FOR MAC OS:
1. $ brew services start mysql
==> Successfully started `mysql` (label: homebrew.mxcl.mysql)

2. $ mysql -u root -p
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 8
Server version: 8.3.0 Homebrew ...  Copyright (c) 2000, 2018, Oracle and/or its affiliates. All rights reserved.  ... Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners. ... Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

3. mysql>

## GUIDE IF THERE ARE SOME ISSUES

### MySQL is not installed via Homebrew on your system. Let's install MySQL using Homebrew and then proceed with starting it.

- Step 1: Install MySQL via Homebrew
First, install MySQL:

```
brew install mysql
```

- Step 2: Start MySQL Using Homebrew
Once the installation is complete, start MySQL using:

```
brew services start mysql
```

- Step 3: Secure MySQL Installation
Run the MySQL secure installation script to set the root password and configure security options:

```
mysql_secure_installation
```

Follow the prompts to set up your root password and other security settings.

- Step 4: Connect to MySQL
Now, you should be able to connect to MySQL using the root user:

```
mysql -u root -p
```

- Step 5: If you forgot the MySQL root password
If you need to reset the root password, follow these - steps:

Stop MySQL if it's running:

```
brew services stop mysql
```


Start MySQL in Safe Mode:

```
sudo mysqld_safe --skip-grant-tables &
```


Connect to MySQL:

```
mysql -u root
```

Reset the MySQL Root Password:

```
ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';
FLUSH PRIVILEGES;
EXIT;
```

Replace 'new_password' with your desired new password.

Restart MySQL Normally:

```
sudo pkill mysqld
brew services start mysql
```


Connect to MySQL:

```
mysql -u root -p
```


#### **Summary**

By following these - steps, you should be able to install MySQL, start the service, secure your installation, and connect to MySQL using the root user. If you need to reset the root password, starting MySQL in safe mode and using the ALTER USER command will allow you to do so.

<hr/>
On macOS, the service and systemctl commands are not available by default. Instead, macOS uses launchctl to manage services, and if MySQL was installed via Homebrew, you can use brew services to manage it.

Let's proceed with the following - steps:

- Step 1: Start MySQL Using Homebrew
If you installed MySQL using Homebrew, you can start MySQL using the following command:

```
brew services start mysql
```

To stop MySQL:

```
brew services stop mysql
```

To restart MySQL:

```
brew services restart mysql
```

- Step 2: Start MySQL in Safe Mode
If you need to reset the MySQL root password and MySQL is not running properly, you can start MySQL in safe mode directly from the command line. This bypasses the normal user authentication process.

Stop MySQL if it's running:

```
sudo pkill mysqld
```

Start MySQL in Safe Mode:

```
sudo mysqld_safe --datadir=/opt/anaconda3/data --skip-grant-tables &
```

Connect to MySQL:

```
mysql -u root
```

- Step 3: Reset the MySQL Root Password
Once connected to MySQL in safe mode, reset the root password:

```
ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';
FLUSH PRIVILEGES;
EXIT;
```

Replace 'new_password' with your desired new password.
<hr/>

- Step 4: Restart MySQL Normally
After resetting the password, stop the safe mode instance and start MySQL normally:

```
sudo pkill mysqld
brew services start mysql
```

- Step 5: Connect to MySQL
Finally, connect to MySQL with the new root password:

```
mysql -u root -p
```
<hr/>

If you did not install MySQL via Homebrew or you are not sure, you can check the installation method and adjust the commands accordingly. These - steps should help you manage and troubleshoot your MySQL installation on macOS.
<hr/>
mysql -u root
ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: NO)
(base)
ChatGPT
The error indicates that MySQL is expecting a password for the root user, but none was provided. Since you set a new password for the root user, you need to provide it when connecting.

Connect to MySQL with Password
Use the -p flag to prompt for the password:

```
mysql -u root -p
```

After running this command, you will be prompted to enter the password you set (new_password).

- Steps to Ensure MySQL is Running
Check if MySQL is running:

```
brew services list
```

This will show the status of MySQL. If it is not running, start it with:

```
brew services start mysql
```

Connect to MySQL with the password:

```
mysql -u root -p
```

**Summary**

Ensure MySQL service is running.
Use mysql -u root -p to connect, and enter the password when prompted.
By following these - steps, you should be able to successfully connect to your MySQL instance.
