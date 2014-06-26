# Unofficial AZbidder.com Chrome Extension

This chrome extension is used to modify the AZbidder.com website to
allow properties to be blacklisted, and to also show lot size on the
search listing screen. This extension is only intended to work on the
NexGen search page.

To use the extension, simply download this repo and load it as an
unpacked chrome extension.

## How it Works

### Blacklisting

If you want to remove a property from your search results in all future
searches, you can blacklist it using this chrome extension. The way
blacklisting works is that it sets the your comp value of the property to be -100.
Any future searches do a check on the comp value, and if it is -100,
that property is removed from the search results (The check takes a
second or so, so you will see the property show up, and then be removed
from the page).
In the search results page there is a 'blacklist' button next to the
street address - pressing this button will blacklist that property.

This does have unintended reprecussions; all *blacklisted* properties will
be added to your watchlist, which means you will get emails about them
every time they are updated.

### Lot Size

The lot size of the property is shown under the *lvl* header. I don't
care for the number of stories a property has, but I do care about lot
size, so I have replaced lvl data with lot size data (which allows you
to sort search results by lot size - this is critical for me).

### Activation

The blacklisting and lot size will only activate if the number of
results returned is less than 90. This is to prevent overwhelming the
AZbidder.com web servers.



## Disclaimer

THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
