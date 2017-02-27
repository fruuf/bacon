const gulp = require('gulp');
const watch = require('gulp-watch');
const { format } = require('prettier');
const { writeFileSync } = require('fs');
const { CLIEngine } = require('eslint');

const cli = new CLIEngine({
  fix: true,
  useEslintrc: true,
});

gulp.task('default', () => {
  watch('src/**/*.js', { events: ['add', 'change'] }, (watcher) => {
    const src = watcher.contents.toString('utf8');
    const formattedSource = format(watcher.contents.toString('utf8'), {});
    const report = cli.executeOnText(formattedSource, watcher.path);
    const [{ output }] = report.results;
    if (output !== src) {
      writeFileSync(watcher.path, output);
      console.log(`fixed ${watcher.path}`);
    }
  });
});