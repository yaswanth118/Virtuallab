import wtforms
from flask import Flask, render_template, flash, redirect, url_for, session, request, logging
from flask_mysqldb import MySQL
from wtforms import Form, StringField, TextAreaField, PasswordField, validators, StringField, SubmitField,BooleanField
from flask_wtf import FlaskForm
from passlib.hash import sha256_crypt
from functools import wraps
from flask_mail import Mail,Message
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer


app = Flask(__name__)
app.config.update(
	MAIL_SERVER='smtp.gmail.com',
	MAIL_PORT=465,
	MAIL_USE_SSL=True,
	MAIL_USERNAME = 'Virtual.labs118@gmail.com',
	MAIL_PASSWORD = 'Virtual@lab'
	)
mail = Mail(app)


app.config['MYSQL_HOST'] = 'remotemysql.com'
app.config['MYSQL_USER'] = 'nU0amtc0De'
app.config['MYSQL_PASSWORD'] = 'OOP4GV0SII'
app.config['MYSQL_DB'] = 'nU0amtc0De'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

# app.config['MYSQL_HOST'] = 'localhost'
# app.config['MYSQL_USER'] = 'root'
# app.config['MYSQL_PASSWORD'] = 'yaswanth2001'
# app.config['MYSQL_DB'] = 'virtuallab'
# app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

#--------------------------------------------------------------------#
@app.route('/Quiz_Cu')
def Quiz_Cu():
    return render_template('/Quiz_Cu.html')

@app.route('/Quiz_Ba')
def Quiz_Ba():
    return render_template('/Quiz_Ba.html')

@app.route('/Quiz_Fe')
def Quiz_Fe():
    return render_template('/Quiz_Fe.html')

@app.route('/Quiz_NH4')
def Quiz_NH4():
    return render_template('/Quiz_NH4.html')

@app.route('/Quiz_Zn')
def Quiz_Zn():
    return render_template('/Quiz_Zn.html')
#--------------------------------------------------------------------#
@app.route('/Quiz_CO3')
def Quiz_CO3():
    return render_template('/Quiz_CO3.html')

@app.route('/Quiz_S')
def Quiz_S():
    return render_template('/Quiz_S.html')

@app.route('/Quiz_SO4')
def Quiz_SO4():
    return render_template('/Quiz_SO4.html')

@app.route('/Quiz_NO3')
def Quiz_NO3():
    return render_template('/Quiz_NO3.html')

@app.route('/Quiz_Cl')
def Quiz_Cl():
    return render_template('/Quiz_Cl.html')


#--------------------------------------------------------------------#
@app.route('/Referlab/salt')
def salt():
    return render_template('Referlab/Salt.html')

@app.route('/Referlab/anion/step1')
def step1():
    return render_template('Referlab/anion/step1.html')

@app.route('/Referlab/anion/step2')
def step2():
    return render_template('Referlab/anion/step2.html')

@app.route('/Referlab/anion/step3')
def step3():
    return render_template('Referlab/anion/step3.html')

@app.route('/Referlab/anion/Co3')
def anionCo3():
    return render_template('Referlab/anion/Co3.html')

@app.route('/Referlab/anion/No2')
def anionNo2():
    return render_template('Referlab/anion/No2.html')

@app.route('/Referlab/anion/S')
def anionS():
    return render_template('Referlab/anion/S.html')

@app.route('/Referlab/anion/So3')
def anionSo3():
    return render_template('Referlab/anion/So3.html')

@app.route('/Referlab/anion/Ch3coo')
def anionCh3coo():
    return render_template('Referlab/anion/Ch3coo.html')

@app.route('/Referlab/anion/Cl')
def anionCl():
    return render_template('Referlab/anion/Cl.html')

@app.route('/Referlab/anion/Br')
def anionBr():
    return render_template('Referlab/anion/Br.html')

@app.route('/Referlab/anion/I')
def anionI():
    return render_template('Referlab/anion/I.html')

@app.route('/Referlab/anion/No3')
def anionNo3():
    return render_template('Referlab/anion/No3.html')

@app.route('/Referlab/anion/C2o4')
def anionC2o4():
    return render_template('Referlab/anion/C2o4.html')

@app.route('/Referlab/anion/So4')
def anionSo4():
    return render_template('Referlab/anion/So4.html')

@app.route('/Referlab/anion/Po4')
def anionPo4():
    return render_template('Referlab/anion/Po4.html')
#--------------------------------------------------------------------#

@app.route('/NO3')
def NO3():
    return render_template('NO3.html')

@app.route('/ConfNO3')
def ConfNO3():
    return render_template('ConfNO3.html')

@app.route('/CO3')
def CO3():
    return render_template('CO3.html')

@app.route('/ConfCO3')
def ConfCO3():
    return render_template('ConfCO3.html')

@app.route('/S')
def S():
    return render_template('S.html')

@app.route('/ConfS')
def ConfS():
    return render_template('ConfS.html')

@app.route('/SO3')
def SO3():
    return render_template('SO3.html')

@app.route('/ConfSO3')
def ConfSO3():
    return render_template('ConfSO3.html')

@app.route('/Cl')
def Cl():
    return render_template('Cl.html')

@app.route('/ConfCl')
def ConfCl():
    return render_template('ConfCl.html')

#--------------------------------------------------------------------#
@app.route('/Fe')
def Fe():
    return render_template('Fe.html')

@app.route('/NH4')
def NH4():
    return render_template('NH4.html')

@app.route('/Zn')
def Zn():
    return render_template('Zn.html')

@app.route('/Ba')
def Ba():
    return render_template('Ba.html')

@app.route('/Cu')
def Cu():
    return render_template('Cu.html')
#--------------------------------------------------------------------#

@app.route('/Referlab/cation/Cation')
def s0():
    return render_template('Referlab/cation/Cation.html')

@app.route('/Referlab/cation/step1')
def s1():
    return render_template('Referlab/cation/c_step1.html')

@app.route('/Referlab/cation/step2')
def s2():
    return render_template('Referlab/cation/c_step2.html')

@app.route('/Referlab/cation/step3')
def s3():
    return render_template('Referlab/cation/c_step3.html')

@app.route('/Referlab/cation/step4')
def s4():
    return render_template('Referlab/cation/c_step4.html')

@app.route('/Referlab/cation/step5')
def s5():
    return render_template('Referlab/cation/c_step5.html')

@app.route('/Referlab/cation/step6')
def s6():
    return render_template('Referlab/cation/c_step6.html')

@app.route('/Referlab/cation/step7')
def s7():
    return render_template('Referlab/cation/c_step7.html')

# Index
@app.route('/')
def index():
    return render_template('home.html')

'''routing from / --> random salt page'''
@app.route('/CuCO3')
def p1():
    return render_template('CuCO3.html')

@app.route('/ZnS')
def p2():
    return render_template('ZnS.html')

@app.route('/BaCl2')
def p3():
    return render_template('BaCl2.html')

@app.route('/NH4NO3')
def p4():
    return render_template('NH4NO3.html')

@app.route('/Fe2SO43')
def p5():
    return render_template('Fe2SO43.html')


# About
@app.route('/about')
def about():
    return render_template('about.html')
#-----------------------------------------------------------------------------------------------------------------#
class RequestResetForm(FlaskForm):
    email = StringField('Email',
                        validators=[validators.DataRequired(), validators.Email()])
    submit = SubmitField('Request Password Reset')

def validate_email(self, email):
    # user = User.query.filter_by(email=email.data).first()
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM users WHERE email = %s", [email.data])
    user=cur.fetchall();
    if user is None:
        raise ValidationError('There is no account with that email. You must register first.')

class ResetPasswordForm(FlaskForm):
    password = PasswordField('Password', validators=[validators.DataRequired()])
    confirm_password = PasswordField('Confirm Password',
                                     validators=[validators.DataRequired(), validators.EqualTo('password')])
    submit = SubmitField('Reset Password')

def get_reset_token(a, expires_sec=1800):
    s = Serializer(app.config['SECRET_KEY'], expires_sec)
    return s.dumps({'user_id': a}).decode('utf-8')

#@staticmethod
def verify_reset_token(token):
    s = Serializer(app.config['SECRET_KEY'])
    try:
        user_id = s.loads(token)['user_id']
    except:
        return None
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM users WHERE username = %s", [user_id])
    return cur.fetchone();



#-----------------------------------------------------------------------------------------------------------------#
def send_reset_email(user):
    token = get_reset_token(user['username'])
    msg = Message('Password Reset Request',
                  sender='project.vijayawada@gmail.com',
                  recipients=[user['email']])
    msg.body = f'''To reset your password, visit the following link:
    
    
            "{url_for('reset_token', token=token, _external=True)}"


If you did not make this request then simply ignore this email and no changes will be made.
'''
    mail.send(msg)


@app.route("/reset_password", methods=['GET', 'POST'])
def reset_request():
    # if current_user.is_authenticated:
    #     return redirect(url_for('home'))
    form = RequestResetForm()
    if form.validate_on_submit():
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE email = %s", [form.email.data])
        user = cur.fetchone()
        # print(user,user['username'],type(user));
        # return 0;
        # user = User.query.filter_by(email=form.email.data).first()
        send_reset_email(user)
        flash('An email has been sent with instructions to reset your password.', 'info')
        return redirect(url_for('login'))
    return render_template('reset_request.html', title='Reset Password', form=form)


@app.route("/reset_password/<token>", methods=['GET', 'POST'])
def reset_token(token):
    user = verify_reset_token(token)
    if user is None:
        flash('That is an invalid or expired token', 'warning')
        return redirect(url_for('reset_request'))
    form = ResetPasswordForm()
    if form.validate_on_submit():
        password = sha256_crypt.encrypt(str(form.password.data))
        cur =mysql.connection.cursor();
        cur.execute("UPDATE users SET password=%s WHERE username=%s",[sha256_crypt.encrypt(str(form.password.data)),user['username']])
        cur.execute("SELECT * FROM users WHERE username = %s", [user['username']])
        mysql.connection.commit()
        cur.close();
        flash('Your password has been updated! You are now able to log in', 'success')
        return redirect(url_for('login'))
    return render_template('reset_token.html', title='Reset Password', form=form)
#-----------------------------------------------------------------------------------------------------------------#

# Articles
@app.route('/articles')
def articles():
    # Create cursor
    cur = mysql.connection.cursor()

    # Get articles
    result =cur.execute("SELECT * FROM articles WHERE author = %s", [session['username']])
    articles = cur.fetchall()
    if result > 0:
        return render_template('articles.html', articles=articles)
    else:
        msg = 'No Notes Found'
        msg = 'No Notes Found'
        return render_template('articles.html', msg=msg)
    # Close connection
    cur.close()


#Single Article
@app.route('/article/<string:id>/')
def article(id):
    # Create cursor
    cur = mysql.connection.cursor()

    # Get article
    result = cur.execute("SELECT * FROM articles WHERE id = %s", [id])

    article = cur.fetchone()

    return render_template('article.html', article=article)


# Register Form Class
class RegisterForm(Form):
    name = StringField('Name', [validators.DataRequired(),validators.Length(min=1, max=50)])
    username = StringField('Username', [validators.DataRequired(),validators.Length(min=4, max=25)])
    email = StringField('Email', [validators.DataRequired(),validators.Length(min=6, max=50),validators.Email()])
    password = PasswordField('Password', [
        validators.DataRequired(),
        validators.EqualTo('confirm', message='Passwords do not match')
    ])
    confirm = PasswordField('Confirm Password')


# User Register
@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegisterForm(request.form)
    if request.method == 'POST' and form.validate():
        name = form.name.data
        email = form.email.data
        username = form.username.data
        password = sha256_crypt.encrypt(str(form.password.data))

        # Create cursor
        cur = mysql.connection.cursor()

        # Execute query
        cur.execute("INSERT INTO users(name, email, username, password) VALUES(%s, %s, %s, %s)", (name, email, username, password))

        # Commit to DB
        mysql.connection.commit()

        # Close connection
        cur.close()

        flash('You are now registered and can log in', 'success')

        return redirect(url_for('login'))
    return render_template('register.html', form=form)


# User login
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Get Form Fields
        username = request.form['username']
        password_candidate = request.form['password']

        # Create cursor
        cur = mysql.connection.cursor()

        # Get user by username
        result = cur.execute("SELECT * FROM users WHERE username = %s", [username])
        if result > 0:
            # Get stored hash
            data = cur.fetchone()
            password = data['password']

            # Compare Passwords
            if sha256_crypt.verify(password_candidate, password):
                # Passed
                session['logged_in'] = True
                session['username'] = username

                flash('You are now logged in', 'success')
                return redirect(url_for('dashboard'))
            else:
                error = 'Invalid login'
                return render_template('login.html', error=error)
            # Close connection
            cur.close()
        else:
            error = 'Username not found'
            return render_template('login.html', error=error)

    return render_template('login.html')

# Check if user logged in
def is_logged_in(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            flash('Unauthorized, Please login', 'danger')
            return redirect(url_for('login'))
    return wrap

# Logout
@app.route('/logout')
@is_logged_in
def logout():
    session.clear()
    flash('You are now logged out', 'success')
    return redirect(url_for('login'))

# Dashboard
@app.route('/dashboard')
@is_logged_in
def dashboard():
    # Create cursor
    cur = mysql.connection.cursor()

    # Get articles
    #result = cur.execute("SELECT * FROM articles")
    # Show articles only from the user logged in 
    result = cur.execute("SELECT * FROM articles WHERE author = %s", [session['username']])

    articles = cur.fetchall()

    if result > 0:
        return render_template('dashboard.html', articles=articles)
    else:
        msg = 'No Notes Found'
        return render_template('dashboard.html', msg=msg)
    # Close connection
    cur.close()

# Article Form Class
class ArticleForm(Form):
    title = StringField('Title', [validators.Length(min=1, max=200)])
    body = TextAreaField('Body', [validators.Length(min=30)])

# Add Article
@app.route('/add_article', methods=['GET', 'POST'])
@is_logged_in
def add_article():
    form = ArticleForm(request.form)
    if request.method == 'POST' and form.validate():
        title = form.title.data
        body = form.body.data

        # Create Cursor
        cur = mysql.connection.cursor()

        # Execute
        cur.execute("INSERT INTO articles(title, body, author) VALUES(%s, %s, %s)",(title, body, session['username']))

        # Commit to DB
        mysql.connection.commit()

        #Close connection
        cur.close()

        flash('Notes Created', 'success')

        return redirect(url_for('dashboard'))

    return render_template('add_article.html', form=form)


# Edit Article
@app.route('/edit_article/<string:id>', methods=['GET', 'POST'])
@is_logged_in
def edit_article(id):
    # Create cursor
    cur = mysql.connection.cursor()

    # Get article by id
    result = cur.execute("SELECT * FROM articles WHERE id = %s", [id])

    article = cur.fetchone()
    cur.close()
    # Get form
    form = ArticleForm(request.form)

    # Populate article form fields
    form.title.data = article['title']
    form.body.data = article['body']

    if request.method == 'POST' and form.validate():
        title = request.form['title']
        body = request.form['body']

        # Create Cursor
        cur = mysql.connection.cursor()
        app.logger.info(title)
        # Execute
        cur.execute ("UPDATE articles SET title=%s, body=%s WHERE id=%s",(title, body, id))
        # Commit to DB
        mysql.connection.commit()

        #Close connection
        cur.close()

        flash('Notes Updated', 'success')

        return redirect(url_for('dashboard'))

    return render_template('edit_article.html', form=form)

# Delete Article
@app.route('/delete_article/<string:id>', methods=['POST'])
@is_logged_in
def delete_article(id):
    # Create cursor
    cur = mysql.connection.cursor()

    # Execute
    cur.execute("DELETE FROM articles WHERE id = %s", [id])

    # Commit to DB
    mysql.connection.commit()

    #Close connection
    cur.close()

    flash('Notes Deleted', 'success')

    return redirect(url_for('dashboard'))

if __name__ == '__main__':
    app.run()
app.secret_key = 'secret123'





