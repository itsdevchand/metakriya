import React from 'react';
import cls from 'classnames';
import s from '../../styles/ContactMe.module.scss';
import Input from '../../components/ui/Input/Input';
import { AiOutlineMobile, AiOutlineInstagram } from 'react-icons/ai';
import { GoMail } from 'react-icons/go';
import Button from '../../components/ui/Button/Button';

const ContactMe = () => {
  return (
    <div className={cls(s.contactMe)}>
      {/* contact top section */}
      <div className={cls('container')}>
        <div className={cls('br-light mb-5', s.contactTop)}>
          <div className='row gx-5 row-cols-md-2 row-cols-1'>
            <div className='col mb-lg-0 mb-4'>
              <div className={s.contactInfo}>
                {/* header section */}
                <div className={s.infoHeader}>
                  <div className={cls('text-primary text-uppercase')}>
                    contact me
                  </div>
                  <div className={cls('fs-5 fw-bold')}>How can i help you?</div>
                  <div className={cls('fw-light fs-6')}>
                    Fill in the group on drop an email
                  </div>
                </div>

                {/* contact tabs */}
                <div className={cls('mt-5', s.infoBody)}>
                  {/* each info tab */}
                  <div className={cls('br-light p-3 mb-3', s.infoTab)}>
                    <AiOutlineMobile />
                    <span className={cls('ms-3')}>+977-9824634258</span>
                  </div>

                  {/* each info tab */}
                  <div className={cls('br-light p-3 mb-3', s.infoTab)}>
                    <GoMail />
                    <span className={cls('ms-3')}>itspixkirya@gmail.com</span>
                  </div>

                  {/* each info tab */}
                  <div className={cls('br-light p-3', s.infoTab)}>
                    <AiOutlineInstagram />
                    <span className={cls('ms-3')}>@itspixkirya</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className={cls('bg-gray p-5', s.contactBox)}>
                <form action=''>
                  <div className='mb-3'>
                    <Input
                      className={cls('form-control')}
                      id='user-name'
                      type='text'
                      placeholder='Name'
                      aria-label='user name'
                    />
                  </div>

                  <div className='mb-3'>
                    <Input
                      className={cls('form-control')}
                      type='email'
                      id='exampleInputEmail1'
                      aria-label='user email'
                      placeholder='Email'
                    />
                  </div>

                  <div className='mb-3'>
                    <Input
                      type='password'
                      className='form-control'
                      id='exampleInputEmail1'
                      aria-label='user email'
                      placeholder='Password'
                    />
                  </div>

                  <div className='mb-3'>
                    <textarea
                      className='form-control'
                      placeholder='Message'
                      rows={5}
                    ></textarea>
                  </div>

                  <button
                    type='submit'
                    className='btn btn-primary text-white px-5'
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact bottom */}
      <div className={s.contacBottom}>
        <div className={cls('container my-5 p-5')}>
          <div className={cls(s.newsLetter)}>
            <div className={cls('row al-center gx-5 row-cols-md-2 row-cols-1')}>
              <div className={cls('col mb-lg-0 mb-4')}>
                <div className={cls('d-flex-align', s.newsLetterTitle)}>
                  <div className={cls(s.newsLetterIcon)}>
                    <GoMail />
                  </div>
                  <div className={cls('ms-3 fs-5', s.titleText)}>
                    Join the newsletter and read the new posts first
                  </div>
                </div>
              </div>
              <div className={cls('col')}>
                <div className={cls('d-flex', s.newsletterBox)}>
                  <Input
                    type='email'
                    className={cls('form-control rounded-0 rounded-start')}
                    id='exampleInputEmail1'
                    aria-label='user email'
                    placeholder='Subscribe'
                  />
                  <Button
                    className={cls(
                      'btn btn-primary rounded-0 rounded-end text-white'
                    )}
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
