import * as React from 'react';

import * as Chakra from '@chakra-ui/react';

export const ConsultFAQ = () => {
  const { isOpen, onOpen, onClose } = Chakra.useDisclosure();

  return (
    <>
      <Chakra.Button onClick={onOpen}>Подробнее</Chakra.Button>

      <Chakra.Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        isFullHeight={true}
      >
        <Chakra.DrawerOverlay />
        <Chakra.DrawerContent>
          <Chakra.DrawerCloseButton />
          <Chakra.DrawerHeader>Консультации</Chakra.DrawerHeader>

          <Chakra.DrawerBody>
            <Chakra.Text>
              Я предлагаю <strong>получасовые</strong> консультации для всех желающих.
              Вопросы по учебе, трудоустройству, развитию в профессии.
            </Chakra.Text>
            <Chakra.Accordion mt={4}>
              <Chakra.AccordionItem>
                <h2>
                  <Chakra.AccordionButton>
                    <Chakra.Box as="span" flex="1" textAlign="left">
                      Что входит в консультации
                    </Chakra.Box>
                    <Chakra.AccordionIcon />
                  </Chakra.AccordionButton>
                </h2>
                <Chakra.AccordionPanel pb={4}>
                  На консультациях мы разбираем Ваши вопросы по веб-разработке - верстка,
                  программирование на JavaScript, TypeScript, использование библиотек и
                  фреймворков. Если Вы собираетесь выполнять какой-то проект, то могу
                  подсказать с чего начать, направить. Могу провести code review. Но я не
                  выполняю работу на заказ, тем более тестовые задания при приеме на
                  работу.
                </Chakra.AccordionPanel>
              </Chakra.AccordionItem>

              <Chakra.AccordionItem>
                <h2>
                  <Chakra.AccordionButton>
                    <Chakra.Box as="span" flex="1" textAlign="left">
                      Как проходят консультации
                    </Chakra.Box>
                    <Chakra.AccordionIcon />
                  </Chakra.AccordionButton>
                </h2>
                <Chakra.AccordionPanel pb={4}>
                  Назначается встреча в Google Meet. Вам на почту приходит ссылка на
                  подключение, в Google Календарь (если вы им пользуетесь) автоматически
                  добавляется слот на консультацию. Google Meet - сервис видео звонков,
                  позволяет делиться экраном. Запись во время консультации не ведется.
                </Chakra.AccordionPanel>
              </Chakra.AccordionItem>

              <Chakra.AccordionItem>
                <h2>
                  <Chakra.AccordionButton>
                    <Chakra.Box as="span" flex="1" textAlign="left">
                      В какое время проходят консультации
                    </Chakra.Box>
                    <Chakra.AccordionIcon />
                  </Chakra.AccordionButton>
                </h2>
                <Chakra.AccordionPanel pb={4}>
                  Время консультаций - вечера будних дней (вторник - пятница). Возможные
                  слоты 17:30, 18:30 по центральноевропейскому времени (UTC+1).
                  Продолжительность - 30 минут.
                </Chakra.AccordionPanel>
              </Chakra.AccordionItem>

              <Chakra.AccordionItem>
                <h2>
                  <Chakra.AccordionButton>
                    <Chakra.Box as="span" flex="1" textAlign="left">
                      Стоимость консультации
                    </Chakra.Box>
                    <Chakra.AccordionIcon />
                  </Chakra.AccordionButton>
                </h2>
                <Chakra.AccordionPanel pb={4}>
                  30 минутная консультации стоит <strong>2000 рублей</strong> при оплате
                  на российскую карту или <strong>25 евро</strong> при переводе на
                  европейскую карту или PayPal.
                </Chakra.AccordionPanel>
              </Chakra.AccordionItem>

              <Chakra.AccordionItem>
                <h2>
                  <Chakra.AccordionButton>
                    <Chakra.Box as="span" flex="1" textAlign="left">
                      Как заказать консультацию
                    </Chakra.Box>
                    <Chakra.AccordionIcon />
                  </Chakra.AccordionButton>
                </h2>
                <Chakra.AccordionPanel pb={4}>
                  Пришлите письмо с запросом на консультацию на почту{' '}
                  <strong>
                    <a href="mailto:pcgramota@gmail.com">pcgramota@gmail.com</a>
                  </strong>{' '}
                  с указанием желаемого времени и приблизительным набором тем для
                  обсуждения.
                </Chakra.AccordionPanel>
              </Chakra.AccordionItem>
            </Chakra.Accordion>
          </Chakra.DrawerBody>
        </Chakra.DrawerContent>
      </Chakra.Drawer>
    </>
  );
};
