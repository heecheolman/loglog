const fs = require('fs');
const { format } = require('date-fns');
const inquirer = require('inquirer');
const grayMatter = require('gray-matter');
const chalk = require('chalk');

const CONTENTS_DIR = '/contents';
const WORK_DIR = process.cwd();
const TARGET_DIR = `${WORK_DIR}${CONTENTS_DIR}`;

const getFileName = title =>
  title
    .split(' ')
    .join('-')
    .toLowerCase();

const getFrontmatter = ({
  fileName,
  title,
  author,
  tags,
}) => grayMatter
  .stringify({
    content: '\n```toc\n```\n\n ## 글을 작성해주세요.'
  }, {
    path: `/${fileName}`,
    title,
    author,
    date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    tags: tags.split(',').map(tag => tag.toString().trim().toLowerCase()),
    draft: false,
  });

const questions = [
  {
    type: 'input',
    name: 'title',
    message: '생성할 포스트의 제목을 입력해주세요.\n',
  },
  {
    type: 'input',
    name: 'author',
    message: '작성자의 이름을 입력해주세요.\n',
  },
  {
    type: 'input',
    name: 'tags',
    message: '태그들을 입력해주세요. (쉼표로 구분)\n',
  },
];

inquirer
  .prompt(questions)
  .then(({ title, author, tags }) => {
    const fileName = getFileName(title);
    const frontmatter = getFrontmatter({
      fileName,
      title,
      author,
      tags,
    });
    fs.writeFile(`${TARGET_DIR}/${fileName}.md`, frontmatter, error => {
      if (error) {
        console.log(chalk.red('파일을 생성하지 못했습니다:', error));
        return;
      }
      console.log('');
      console.log(chalk.green('파일을 생성했습니다.'));
    });
  });
