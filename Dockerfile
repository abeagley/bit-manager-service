FROM ubuntu:18.04
MAINTAINER Aric Beagley "https://github.com/abeagley"
EXPOSE 22 4000
VOLUME /home/bit/server

# Main setup
RUN apt update && \
    apt upgrade -y && \
    apt install apt-utils -y && \
    apt install bash build-essential curl git openssh-server python sudo -y

# Bit user setup
RUN groupadd -g 8080 bit && useradd -r -u 1001 -g bit bit && usermod -s /bin/bash bit && usermod -aG sudo bit && \
    echo "root ALL=(ALL) ALL" >> /etc/sudoers && \
    echo "bit ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers && \
    echo "Defaults env_reset" >> /etc/sudoers && \
    echo "Defaults secure_path=\"/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\"" >> /etc/sudoers

# SSHD Setup
RUN mkdir -p /var/run/sshd && \
    mkdir -p /var/run/bit && \
    mkdir -p /home/bit/.ssh && \
    mkdir -p /home/bit/.bit-init && \
    mkdir -p /scopes && \
    touch /home/bit/.ssh/authorized_keys && \
    chown -R bit:bit /home/bit && \
    chown -R bit:bit /scopes && \
    echo "AuthorizedKeysFile %h/.ssh/authorized_keys" >> /etc/ssh/sshd_config && \
    echo "AllowGroups bit" >> /etc/ssh/sshd_config && \
    echo "PasswordAuthentication no" >> /etc/ssh/sshd_config && \
    echo "PermitEmptyPasswords no" >> /etc/ssh/sshd_config && \
    echo "PubkeyAuthentication yes" >> /etc/ssh/sshd_config

# Node Environment Setup
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
    apt install nodejs -y && \
    npm i -g npm && \
    npm i -g yarn bit-bin --unsafe

# Cleanup
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/

WORKDIR /home/bit/server
USER bit
ENV PATH="${PATH}:/usr/libexec/lib/node_modules/npm/bin:/usr/bin/node_modules/npm/bin:/usr/local/lib/node_modules/bin"
RUN mkdir -p /home/bit/.ssh  && \
    touch /home/bit/.ssh/authorized_keys && \
    bit config set analytics_reporting false && \
    bit config set user.name BitManager && \
    bit config set user.email bitmanager@localhost.local && \
    git config --global user.name BitManager && \
    git config --global user.email bitmanager@localhost.local

CMD ["/bin/bash", "-c", "scripts/start.sh"]
